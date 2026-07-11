import * as Inputs from '@observablehq/inputs';
import glossary from '../../notebooks/migrated/spark-explain/spark-glossary.json';
import sparkExplainHtml from '../../notebooks/migrated/spark-explain/spark-ui.html?raw';
import sortHtml from '../../notebooks/migrated/understanding-the-spark-ui-by-example-sorting-data/sql-tab.html?raw';
import leftJoinHtml from '../../notebooks/migrated/understanding-the-spark-ui-by-example-the-left-join/sql-tab.html?raw';

export {sparkExplainHtml, sortHtml, leftJoinHtml};

function parse(raw: string, document: Document) {
  return new DOMParser().parseFromString(raw, 'text/html');
}

function textWithSpaces(node: Node): string {
  let text = ''; node.childNodes.forEach((child) => { text += textWithSpaces(child); if (!child.firstChild) text += `${child.textContent} `; }); return text;
}

function definitions(text: string, document: Document) {
  const wrapper = document.createElement('div');
  Object.keys(glossary).forEach((key) => {
    if (!text.toLowerCase().includes(`${key} `) && !text.toLowerCase().includes(`${key}(`)) return;
    const paragraph = document.createElement('p'); const strong = document.createElement('strong'); strong.className = 'title_case'; strong.textContent = (glossary as any)[key].key;
    paragraph.append(strong, `: ${(glossary as any)[key].short_definition}`); wrapper.append(paragraph);
  }); return wrapper;
}

function showTooltip(target: Element, content: Node, document: Document) {
  document.querySelectorAll('.spark-notebook-tooltip').forEach((tooltip) => tooltip.remove());
  const tooltip = document.createElement('div'); tooltip.className = 'tooltip right in spark-notebook-tooltip'; const inner = document.createElement('div'); inner.className = 'tooltip-inner'; inner.append(content); const arrow = document.createElement('div'); arrow.className = 'tooltip-arrow'; tooltip.append(arrow, inner); document.body.append(tooltip);
  const box = target.getBoundingClientRect(); tooltip.style.left = `${box.right + globalThis.scrollX + 3}px`; tooltip.style.top = `${box.top + globalThis.scrollY + box.height / 2 - tooltip.offsetHeight / 2}px`;
}

export function renderSparkPlan(raw: string, annotations: Record<string, string> = {}, includeId = false, document: Document = globalThis.document) {
  const parsed = parse(raw, document); const source = parsed.querySelector('#plan-viz-graph svg'); if (!source) return document.createTextNode('No Spark plan found.');
  const plan = document.importNode(source, true) as SVGSVGElement; plan.setAttribute('class', 'sparkui');
  const metadata = parsed.querySelector('#plan-viz-metadata');
  const attach = (selector: '.node' | '.cluster') => plan.querySelectorAll(selector).forEach((target) => {
    target.addEventListener('mouseover', () => {
      const className = [...target.classList].find((name) => name.startsWith(selector === '.node' ? 'node_' : 'cluster_')) || '';
      const content = document.createElement('div');
      if (includeId) content.append(className, ' ');
      if (annotations[className]) { const custom = document.createElement('p'); custom.textContent = annotations[className]; content.append(custom); }
      const id = Number(className.match(/\d+/)?.[0]); const original = metadata?.querySelector(`#plan-meta-data-${id}`)?.textContent || '';
      content.append(definitions(`${textWithSpaces(target)} ${original}`, document));
      if (selector === '.node') { const paragraph = document.createElement('p'); const strong = document.createElement('strong'); strong.textContent = 'Original tooltip: '; paragraph.append(strong, original); content.append(paragraph); }
      showTooltip(target, content, document);
    });
    target.addEventListener('mouseout', () => document.querySelectorAll('.spark-notebook-tooltip').forEach((tooltip) => tooltip.remove()));
  });
  attach('.node'); attach('.cluster'); return plan;
}

export function renderSparkMetadata(raw: string, document: Document = globalThis.document) {
  const node = parse(raw, document).querySelector('#plan-viz-metadata'); return node ? document.importNode(node, true) : document.createTextNode('');
}

export function renderSparkJobs(raw: string, document: Document = globalThis.document) {
  const node = parse(raw, document).querySelector('.unstyled'); return node ? document.importNode(node, true) : document.createTextNode('');
}

export function createSparkHtmlInput(value = sparkExplainHtml) {
  const input = Inputs.textarea({value, rows: 6, width: '100%'}); const textarea = input.querySelector('textarea'); if (textarea) textarea.style.maxHeight = 'none'; return input;
}

export function renderSparkGlossary(document: Document = globalThis.document) {
  const wrapper = document.createElement('div'); const heading = document.createElement('h2'); heading.textContent = 'Glossary'; wrapper.append(heading);
  Object.keys(glossary).forEach((key) => { const title = document.createElement('h3'); title.className = 'title_case'; title.textContent = key; const paragraph = document.createElement('p'); paragraph.textContent = (glossary as any)[key].definition; wrapper.append(title, paragraph); }); return wrapper;
}

export function sparkStyles(document: Document = globalThis.document) {
  const style = document.createElement('style'); style.textContent = `.sparkui{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:11.844px;line-height:14px;font-weight:normal;text-shadow:none}svg.sparkui g.cluster rect{fill:#A0DFFF;stroke:#3EC0FF;stroke-width:1px}svg.sparkui g.node rect{fill:#C3EBFF;stroke:#3EC0FF;stroke-width:1px}svg.sparkui text :first-child{font-weight:bold}svg.sparkui path{stroke:#444;stroke-width:1.5px}.tooltip-inner{word-wrap:break-word}.tooltip{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;position:absolute;z-index:1030;display:block;visibility:visible;font-size:11px;line-height:1.4}.tooltip code{font-size:11px}.tooltip.in{opacity:.8}.tooltip.right{margin-left:3px;padding:0 5px}.tooltip-inner{max-width:400px;padding:8px;color:#fff;text-align:left;text-decoration:none;background:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.title_case{text-transform:capitalize}`; return style;
}
