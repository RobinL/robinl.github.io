import define1 from "./a2e58f97fd5e8d7c@756.js";

function _1(md){return(
md`# Fault tolerant trie
`
)}

function _test_addresses(Inputs,initial_list_of_addresses)
{
  const el = Inputs.textarea({
    value: initial_list_of_addresses,
    rows: 20,
    resize: "vertical",
    spellcheck: false
  });
  el.querySelector("textarea").style.maxHeight = null;
  let ta = el.querySelector("textarea");
  ta.style.setProperty("font-size", "0.8rem", "important");
  ta.style.setProperty("line-height", "1rem", "important");

  return el;
}


function _messy_address_to_lookup(Inputs)
{
  const el = Inputs.text({
    label: "Lookup an address",
    value: `CORNER SHOP 1 RAINBOW ROAD EXTRA ABBOTS LANGLEY HERTS UK`,
    width: 800,
    spellcheck: false
  });
  let ta = el.querySelector("input");
  ta.style.setProperty("font-size", "0.8rem", "important");
  ta.style.setProperty("line-height", "1rem", "important");

  return el;
}


function _trie_basic(show_trie_using_d3,addressTrie){return(
show_trie_using_d3(addressTrie)
)}

function _trie_with_route(show_highlighted_trie_using_d3,messy_address_to_lookup,addressTrie){return(
show_highlighted_trie_using_d3(
  messy_address_to_lookup,
  addressTrie
)
)}

function _show_highlighted_trie_using_d3(d3,addressTrie,traceAddressRoute,renderTraceStepsTable,md)
{
  const SUCCESS_COLOR = "#2ca02c";
  const FAILURE_COLOR = "#d62728";
  const NEUTRAL_COLOR = "#1f77b4";

  function trieToHierarchy(rootTrie) {
    function nodeToObj(label, node) {
      const children = node?.children
        ? Array.from(node.children.entries(), ([tok, child]) => nodeToObj(tok, child))
        : Array.isArray(node?.kids)
        ? node.kids.map(([tok, child]) => nodeToObj(tok, child))
        : [];
      return {
        name: label,
        uprn: node?.uprn ?? null,
        cnt: node?.cnt ?? 0,
        term: node?.term ?? 0,
        nodeRef: node ?? null,
        children
      };
    }
    if (!rootTrie) {
      return {
        name: "root",
        uprn: null,
        cnt: 0,
        term: 0,
        nodeRef: null,
        children: []
      };
    }
    return nodeToObj("root", rootTrie);
  }

  function renderTrie(
    trie,
    {
      nodeSize = 18,
      paddingRight = 40,
      bulletRadius = 3.5,
      terminalColor = "#1f77b4",
      highlightSet = new Set(),
      highlightColor = FAILURE_COLOR,
      highlightFillOpacity = 0.12
    } = {}
  ) {
    const data = trieToHierarchy(trie);
    const root = d3.hierarchy(data).eachBefore(((i = 0) => (d) => { d.index = i++; })());
    const nodes = root.descendants();

    const columns = [
      { label: "UPRN", x: 380, format: (d) => d.data.uprn ?? "-" },
      { label: "count", x: 460, format: (d) => d.data.cnt },
      {
        label: "terminal",
        x: 560,
        format: (d) => (d.data.term ? "✓" : ""),
        fill: (d) => (d.data.term ? terminalColor : "#444")
      }
    ];

    const width = Math.max(640, (columns.length ? d3.max(columns, (c) => c.x) : 0) + paddingRight);
    const height = (nodes.length + 1) * nodeSize;

    const svg = d3
      .create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-nodeSize / 2, (-nodeSize * 3) / 2, width, height])
      .attr(
        "style",
        "max-width: 100%; height: auto; font: 11px system-ui, sans-serif; overflow: visible;"
      );

    const highlightNode = (node) => highlightSet.has(node?.data?.nodeRef);

    const linkGroup = svg.append("g").attr("fill", "none").attr("stroke", "#b3b3b3").attr("stroke-width", 1.2);

    linkGroup
      .selectAll("path")
      .data(root.links())
      .join("path")
      .attr(
        "d",
        (d) => `
        M${d.source.depth * nodeSize},${d.source.index * nodeSize}
        V${d.target.index * nodeSize}
        h${nodeSize}
      `
      )
      .attr("stroke", (d) => {
        const onPath = highlightSet.has(d.source.data.nodeRef) && highlightSet.has(d.target.data.nodeRef);
        return onPath ? highlightColor : "#b3b3b3";
      })
      .attr("stroke-width", (d) => {
        const onPath = highlightSet.has(d.source.data.nodeRef) && highlightSet.has(d.target.data.nodeRef);
        return onPath ? 2.4 : 1.2;
      })
      .attr("stroke-opacity", (d) => {
        const onPath = highlightSet.has(d.source.data.nodeRef) && highlightSet.has(d.target.data.nodeRef);
        return onPath ? 0.95 : 0.5;
      });

    const gNode = svg
      .append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("transform", (d) => `translate(0,${d.index * nodeSize})`);

    gNode
      .insert("rect", "circle")
      .attr("x", -nodeSize / 2)
      .attr("y", -nodeSize / 2)
      .attr("width", width)
      .attr("height", nodeSize)
      .attr("fill", (d) => (highlightNode(d) ? highlightColor : "#000"))
      .attr("fill-opacity", (d) => (highlightNode(d) ? highlightFillOpacity : 0));

    gNode
      .append("circle")
      .attr("cx", (d) => d.depth * nodeSize)
      .attr("r", bulletRadius)
      .attr("fill", (d) => {
        const onPath = highlightNode(d);
        if (d.data.term) return onPath ? highlightColor : terminalColor;
        if (onPath) return highlightColor;
        return "#999";
      })
      .attr("stroke", (d) => {
        const onPath = highlightNode(d);
        if (d.data.term) return onPath ? highlightColor : terminalColor;
        return onPath ? highlightColor : null;
      })
      .attr("stroke-width", (d) => {
        const onPath = highlightNode(d);
        if (d.data.term) return onPath ? 2 : 1.5;
        return onPath ? 2 : null;
      });

    gNode
      .append("text")
      .attr("dy", "0.32em")
      .attr("x", (d) => d.depth * nodeSize + 6)
      .attr("fill", (d) => (highlightNode(d) ? highlightColor : "#111"))
      .attr("font-weight", (d) => (highlightNode(d) ? "600" : null))
      .text((d) => d.data.name);

    gNode.append("title").text((d) => {
      const path = d
        .ancestors()
        .reverse()
        .map((a) => a.data.name)
        .join(" / ");
      return (
        `${path}\n` +
        `uprn=${d.data.uprn ?? 0}  count=${d.data.cnt}  terminal=${d.data.term ? "yes" : "no"}`
      );
    });

    for (const { label, x, format, fill } of columns) {
      svg
        .append("text")
        .attr("dy", "0.32em")
        .attr("y", -nodeSize)
        .attr("x", x)
        .attr("text-anchor", "end")
        .attr("font-weight", "bold")
        .text(label);

      gNode
        .append("text")
        .attr("dy", "0.32em")
        .attr("x", x)
        .attr("text-anchor", "end")
        .attr("fill", (d) => {
          if (highlightNode(d)) return highlightColor;
          return fill ? fill(d) : "#444";
        })
        .text((d) => format(d));
    }

    return svg.node();
  }

  return function showHighlightedTrieUsingD3(
    messyAddress,
    trie = addressTrie,
    {
      // New names (C++) with sensible defaults:
      skipMinLocalCount = 10,
      skipMaxInWalk = 2,
      minMatchedTokens = 2,
      entryMinLocalCount = 10,
      maxTrieEntryDepth = 2,
      // Legacy names for backward-compat:
      skipCntThreshold,               // maps to skipMinLocalCount
      maxMissingTailTokensInMessy,    // maps to maxTrieEntryDepth
      traceOptions = {},
      ...renderOptions
    } = {}
  ) {
    const address = messyAddress ?? "";
    const trimmed = address.trim();

    // Unify options for the walker (new names take precedence; legacy still works).
    const unifiedTraceOptions = {
      skipMinLocalCount:
        traceOptions.skipMinLocalCount ??
        skipMinLocalCount ??
        skipCntThreshold,
      skipMaxInWalk: traceOptions.skipMaxInWalk ?? skipMaxInWalk,
      minMatchedTokens: traceOptions.minMatchedTokens ?? minMatchedTokens,
      entryMinLocalCount:
        traceOptions.entryMinLocalCount ?? entryMinLocalCount,
      maxTrieEntryDepth:
        traceOptions.maxTrieEntryDepth ??
        maxTrieEntryDepth ??
        maxMissingTailTokensInMessy,
      maxStartOffset: traceOptions.maxStartOffset // optional
    };

    const trace = traceAddressRoute(trimmed, trie, unifiedTraceOptions);

    const matched = Boolean(trace?.outcome?.matched);
    const computedHighlightColor = trimmed
      ? matched
        ? SUCCESS_COLOR
        : FAILURE_COLOR
      : NEUTRAL_COLOR;

    const highlightNodes = new Set(trace?.route?.pathNodes ?? []);
    if (trie) highlightNodes.add(trie);

    const renderParams = {
      highlightSet: highlightNodes,
      ...renderOptions
    };
    if (renderParams.highlightColor == null) {
      renderParams.highlightColor = computedHighlightColor;
    }

    const svg = renderTrie(trie, renderParams);

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "0.5rem";

    const status = document.createElement("div");
    status.style.fontFamily = "sans-serif";
    status.style.fontSize = "12px";
    status.style.whiteSpace = "pre-line";

    if (!trimmed) {
      status.textContent = "Enter an address to trace through the trie.";
      container.appendChild(status);
    } else {
      container.appendChild(status);

      const addrBlock = document.createElement("div");
      addrBlock.style.display = "flex";
      addrBlock.style.flexDirection = "column";
      addrBlock.style.fontFamily = "monospace";
      addrBlock.style.fontSize = "12px";
      addrBlock.style.gap = "0.2rem";

      const messyLine = document.createElement("div");
      messyLine.textContent = `Input : ${trimmed}`;
      messyLine.style.color = "#444";

      const canonicalLine = document.createElement("div");
      canonicalLine.textContent = matched
        ? `Match : ${trace.summary?.matchedTokens?.join(" ") ?? ""}`
        : "Match : (none)";
      canonicalLine.style.color = matched ? "#2ca02c" : "#d62728";

      addrBlock.appendChild(messyLine);
      addrBlock.appendChild(canonicalLine);
      container.appendChild(addrBlock);
    }

    if (svg) {
      container.appendChild(svg);
    }

    if (typeof renderTraceStepsTable === "function") {
      const tableEl = renderTraceStepsTable(trace);
      if (tableEl) {
        container.appendChild(
          md`The following explains how the algorithm walked through the trie from root to branch token by token:`
        );
        container.appendChild(tableEl);
      }
    }

    container.trace = trace;
    return container;
  };
}


function _renderTraceStepsTable(){return(
(trace, options = {}) => {
  const {
    showReason = true,
    showDetails = true,
    tableClass = "trace-steps-table"
  } = options;

  const container = document.createElement("div");
  container.className = "trace-steps";

  const table = document.createElement("table");
  table.className = tableClass;
  table.style.borderCollapse = "collapse";
  table.style.fontFamily = "system-ui, sans-serif";
  table.style.fontSize = "12px";
  table.style.marginTop = "0.5rem";
  table.style.width = "100%";

  const makeCell = (tag, text, align = "left") => {
    const cell = document.createElement(tag);
    cell.textContent = text;
    cell.style.border = "1px solid #ddd";
    cell.style.padding = "0.25rem 0.5rem";
    cell.style.textAlign = align;
    return cell;
  };

  const header = document.createElement("tr");
  header.appendChild(makeCell("th", "idx", "right"));
  header.appendChild(makeCell("th", "token"));
  header.appendChild(makeCell("th", "action"));
  if (showReason) header.appendChild(makeCell("th", "reason"));
  if (showDetails) header.appendChild(makeCell("th", "details"));
  table.appendChild(header);

  const steps = trace?.route?.steps ?? [];
  const actionText = (step) => {
    if (!step) return "";
    switch (step.action) {
      case "consumed":
        return step.reason === "consumed_after_skip" ? "✓ via skip" : "✓";
      case "skipped":
        return "skip";
      case "mismatch":
        return "✗ mismatch";
      default:
        return "·";
    }
  };

  if (steps.length === 0) {
    const row = document.createElement("tr");
    row.appendChild(makeCell("td", "-", "right"));
    row.appendChild(makeCell("td", "(no steps)"));
    row.appendChild(makeCell("td", ""));
    if (showReason) row.appendChild(makeCell("td", ""));
    if (showDetails) row.appendChild(makeCell("td", ""));
    table.appendChild(row);
  } else {
    const ordered = steps.map((step, idx) => ({ step, idx })).reverse();
    for (const { step, idx } of ordered) {
      const row = document.createElement("tr");
      row.appendChild(makeCell("td", String(idx), "right"));
      row.appendChild(makeCell("td", step.token ?? "", "left"));
      row.appendChild(makeCell("td", actionText(step), "left"));
      if (showReason) {
        const reasonText = step.reason ? step.reason.replace(/_/g, " ") : "";
        row.appendChild(makeCell("td", reasonText, "left"));
      }
      if (showDetails) {
        const details = [];
        if (step.event?.type === "skip" && step.event.lookaheadToken) {
          details.push(`lookahead→${step.event.lookaheadToken}`);
        }
        if (
          step.event?.nodeAfter?.uprn != null &&
          step.event.type === "consume"
        ) {
          details.push(`uprn=${step.event.nodeAfter.uprn}`);
        }
        if (
          step.event?.nodeAfter?.cnt != null &&
          step.event.type === "consume"
        ) {
          details.push(`cnt=${step.event.nodeAfter.cnt}`);
        }
        if (step.event?.type === "mismatch") {
          details.push("no child");
        }
        row.appendChild(makeCell("td", details.join(", "), "left"));
      }
      table.appendChild(row);
    }
  }

  container.appendChild(table);
  return container;
}
)}

function _traceAddressRoute(addressTrie)
{
  const MAX_TRAILING_TOKENS_TO_IGNORE = 2;
  const tokenize = (text) =>
    text ? text.trim().split(/\s+/).filter(Boolean) : [];

  const toOriginalIndex = (reversedIndex, total) => total - 1 - reversedIndex;

  const sortUnique = (indices) =>
    Array.from(new Set(indices)).sort((a, b) => a - b);

  const collectEntryNodes = (root, maxDepth) => {
    if (!root) return [];
    const entries = [{ node: root, path: [root], depth: 0 }];
    if (maxDepth <= 0) return entries;
    const stack = [{ node: root, depth: 0, path: [root] }];
    while (stack.length) {
      const { node, depth, path } = stack.pop();
      if (depth === maxDepth) continue;
      for (const child of node.children.values()) {
        const nextPath = [...path, child];
        entries.push({ node: child, path: nextPath, depth: depth + 1 });
        stack.push({ node: child, depth: depth + 1, path: nextPath });
      }
    }
    return entries;
  };

  const buildSteps = (attempt, tokens, reversedTokens, total) => {
    const steps = tokens.map((token, index) => ({
      index,
      token,
      reversedIndex: total - 1 - index,
      action: "ignored",
      reason: "not_processed",
      event: null,
      nodeBefore: null,
      nodeAfter: null
    }));

    const markStep = (originalIndex, updates) => {
      if (originalIndex < 0 || originalIndex >= steps.length) return;
      steps[originalIndex] = { ...steps[originalIndex], ...updates };
    };

    for (const evt of attempt.events) {
      if (evt.originalIndex == null) continue;
      if (evt.type === "consume") {
        markStep(evt.originalIndex, {
          action: "consumed",
          reason:
            evt.via === "skip" ? "consumed_after_skip" : "consumed_direct",
          event: evt,
          nodeBefore: evt.nodeBefore ?? null,
          nodeAfter: evt.nodeAfter ?? null
        });
      } else if (evt.type === "post_accept_skip") {
        markStep(evt.originalIndex, {
          action: "skipped",
          reason: "match_already_found",
          event: evt,
          nodeBefore: evt.node ?? evt.nodeBefore ?? null,
          nodeAfter: evt.node ?? evt.nodeAfter ?? null
        });
      } else if (evt.type === "skip") {
        markStep(evt.originalIndex, {
          action: "skipped",
          reason: evt.reason,
          event: evt,
          nodeBefore: evt.nodeBefore ?? null,
          nodeAfter: evt.nodeAfter ?? null
        });
      } else if (evt.type === "mismatch") {
        markStep(evt.originalIndex, {
          action: "mismatch",
          reason: evt.reason,
          event: evt,
          nodeBefore: evt.node ?? null,
          nodeAfter: evt.node ?? null
        });
      }
    }

    for (let rev = 0; rev < attempt.startIndex; rev += 1) {
      const originalIndex = toOriginalIndex(rev, total);
      const step = steps[originalIndex];
      if (step && step.action === "ignored") {
        steps[originalIndex] = {
          ...step,
          reason: "start_offset"
        };
      }
    }

    const remainingReason = attempt.matched
      ? "ignored_after_accept"
      : "ignored_after_failure";
    for (let rev = attempt.finalIndex; rev < total; rev += 1) {
      const originalIndex = toOriginalIndex(rev, total);
      const step = steps[originalIndex];
      if (step && step.action === "ignored") {
        steps[originalIndex] = {
          ...step,
          reason: remainingReason
        };
      }
    }

    return steps;
  };

  const buildResult = (attempt, context) => {
    const {
      messyAddress,
      tokens,
      reversedTokens,
      parameters,
      total,
      attemptsTried
    } = context;
    const steps = buildSteps(attempt, tokens, reversedTokens, total);
    return {
      messyAddress,
      tokens,
      reversedTokens,
      parameters,
      outcome: {
        matched: attempt.matched,
        type: attempt.decision?.type ?? null,
        reason: attempt.decision?.reason ?? null,
        uprn: attempt.decision?.uprn ?? null,
        node: attempt.decision?.node ?? attempt.finalNode ?? null,
        remainingTokens: attempt.decision?.remainingTokens ?? null,
        isLeaf: attempt.decision?.isLeaf ?? null
      },
      route: {
        attemptsConsidered: attemptsTried,
        startIndex: attempt.startIndex,
        entryDepth: attempt.entryDepth,
        entryPath: attempt.entryPath,
        pathNodes: attempt.pathNodes,
        finalIndex: attempt.finalIndex,
        events: attempt.events,
        steps
      },
      summary: {
        consumedCount: attempt.consumedIndices.length,
        skippedCount: attempt.skippedIndices.length,
        matchedTokens: attempt.matchedTokens,
        skippedTokens: attempt.skippedTokens
      }
    };
  };

  return function traceAddressRoute(
    messyAddress,
    root = addressTrie,
    {
      skipCntThreshold = 6,
      maxMissingTailTokensInMessy = 0,
      maxStartOffset = 2
    } = {}
  ) {
    if (!root) {
      return {
        messyAddress,
        tokens: [],
        reversedTokens: [],
        parameters: {
          skipCntThreshold,
          maxMissingTailTokensInMessy,
          maxStartOffset
        },
        outcome: {
          matched: false,
          type: "reject",
          reason: "missing_trie",
          uprn: null,
          node: null,
          remainingTokens: null,
          isLeaf: null
        },
        route: {
          attemptsConsidered: 0,
          startIndex: 0,
          entryDepth: 0,
          entryPath: [],
          pathNodes: [],
          finalIndex: 0,
          events: [],
          steps: []
        },
        summary: {
          consumedCount: 0,
          skippedCount: 0,
          matchedTokens: [],
          skippedTokens: []
        }
      };
    }

    const tokens = tokenize(messyAddress || "");
    const reversedTokens = [...tokens].reverse();
    const total = reversedTokens.length;
    const parameters = {
      skipCntThreshold,
      maxMissingTailTokensInMessy,
      maxStartOffset
    };

    if (total === 0) {
      return {
        messyAddress,
        tokens,
        reversedTokens,
        parameters,
        outcome: {
          matched: false,
          type: "reject",
          reason: "empty_input",
          uprn: null,
          node: root,
          remainingTokens: 0,
          isLeaf: root.children.size === 0 && root.term === 1
        },
        route: {
          attemptsConsidered: 0,
          startIndex: 0,
          entryDepth: 0,
          entryPath: [root],
          pathNodes: [root],
          finalIndex: 0,
          events: [],
          steps: []
        },
        summary: {
          consumedCount: 0,
          skippedCount: 0,
          matchedTokens: [],
          skippedTokens: []
        }
      };
    }

    const entries = collectEntryNodes(root, maxMissingTailTokensInMessy);
    let attemptCounter = 0;
    let bestAttempt = null;

    const considerBest = (candidate) => {
      if (!candidate) return;
      if (!bestAttempt) {
        bestAttempt = candidate;
        return;
      }
      const currentMatched = bestAttempt.consumedIndices.length;
      const candidateMatched = candidate.consumedIndices.length;
      if (candidateMatched > currentMatched) {
        bestAttempt = candidate;
        return;
      }
      if (
        candidateMatched === currentMatched &&
        candidate.pathNodes.length > bestAttempt.pathNodes.length
      ) {
        bestAttempt = candidate;
      }
    };

    const contextBase = {
      messyAddress,
      tokens,
      reversedTokens,
      parameters,
      total
    };

    const maxStart = Math.min(total - 1, Math.max(0, maxStartOffset));

    for (let start = 0; start <= maxStart; start += 1) {
      for (let entryIndex = 0; entryIndex < entries.length; entryIndex += 1) {
        const entry = entries[entryIndex];
        attemptCounter += 1;

        const pathNodes = entry.path.slice();
        let node = entry.node;
        let index = start;
        let skipsUsed = 0;

        const attempt = {
          attemptId: attemptCounter,
          startIndex: start,
          entryIndex,
          entryDepth: entry.depth,
          entryNode: entry.node,
          entryPath: entry.path.slice(),
          pathNodes,
          events: [],
          consumedIndices: [],
          skippedIndices: [],
          matchedTokens: [],
          skippedTokens: [],
          finalNode: entry.node,
          finalIndex: start,
          matched: false,
          decision: null,
          failure: null
        };

        const recordEvent = (type, data = {}) => {
          attempt.events.push({
            type,
            ...data,
            step: attempt.events.length
          });
        };

        recordEvent("seed", {
          node,
          entryDepth: entry.depth,
          startIndex: start,
          entryIndex
        });

        while (index < total) {
          const reversedIndex = index;
          const originalIndex = toOriginalIndex(reversedIndex, total);
          const token = reversedTokens[reversedIndex];
          const child = node.children.get(token);

          if (child) {
            const prevNode = node;
            node = child;
            pathNodes.push(node);
            recordEvent("consume", {
              token,
              originalIndex,
              reversedIndex,
              nodeBefore: prevNode,
              nodeAfter: node,
              via: "direct"
            });
            attempt.consumedIndices.push(originalIndex);
            index += 1;
            continue;
          }

          const nodeHasChildren = node.children.size > 0;
          const canConsiderSkip =
            skipsUsed === 0 &&
            index + 1 < total &&
            !(node.term && nodeHasChildren);

          if (canConsiderSkip) {
            const lookaheadIndex = index + 1;
            const lookaheadToken = reversedTokens[lookaheadIndex];
            const skipTarget = node.children.get(lookaheadToken);
            if (skipTarget && skipTarget.cnt >= skipCntThreshold) {
              const prevNode = node;
              const skippedOriginalIndex = originalIndex;
              const consumedOriginalIndex = toOriginalIndex(
                lookaheadIndex,
                total
              );

              recordEvent("skip", {
                token,
                originalIndex: skippedOriginalIndex,
                reversedIndex,
                lookaheadToken,
                nodeBefore: prevNode,
                nodeAfter: skipTarget,
                reason: "cnt_gate"
              });

              node = skipTarget;
              pathNodes.push(node);
              recordEvent("consume", {
                token: lookaheadToken,
                originalIndex: consumedOriginalIndex,
                reversedIndex: lookaheadIndex,
                nodeBefore: prevNode,
                nodeAfter: node,
                via: "skip"
              });

              attempt.skippedIndices.push(skippedOriginalIndex);
              attempt.consumedIndices.push(consumedOriginalIndex);
              skipsUsed = 1;
              index += 2;
              continue;
            }
          }

          recordEvent("mismatch", {
            token,
            originalIndex,
            reversedIndex,
            node,
            reason: "no_child"
          });
          attempt.failure = {
            type: "mismatch",
            token,
            originalIndex,
            reversedIndex
          };
          break;
        }

        attempt.finalNode = node;
        attempt.finalIndex = index;
        attempt.pathNodes = pathNodes;

        const consumedSorted = sortUnique(attempt.consumedIndices);
        const skippedSorted = sortUnique(attempt.skippedIndices);
        attempt.matchedTokens = consumedSorted.map((idx) => tokens[idx]);
        attempt.skippedTokens = skippedSorted.map((idx) => tokens[idx]);

        const remainingTokens = total - index;
        const highestConsumedIndex =
          consumedSorted.length > 0
            ? consumedSorted[consumedSorted.length - 1]
            : -1;
        const tailIgnoredCount =
          highestConsumedIndex < 0
            ? total
            : Math.max(0, total - (highestConsumedIndex + 1));

        if (node.term) {
          const isLeaf = node.children.size === 0;
          const consumedAllTokens = index === total;
          const trailingWithinLimit =
            tailIgnoredCount <= MAX_TRAILING_TOKENS_TO_IGNORE;
          const canAccept =
            trailingWithinLimit && (isLeaf || consumedAllTokens);
          if (canAccept) {
            if (attempt.failure?.type === "mismatch") {
              const { originalIndex, reversedIndex } = attempt.failure;
              const eventIndex = attempt.events.findIndex(
                (evt) =>
                  evt.type === "mismatch" &&
                  evt.originalIndex === originalIndex &&
                  evt.reversedIndex === reversedIndex
              );
              if (eventIndex >= 0) {
                const mismatchEvt = attempt.events[eventIndex];
                attempt.events[eventIndex] = {
                  ...mismatchEvt,
                  type: "post_accept_skip",
                  reason: "match_already_found"
                };
              }
              attempt.failure = null;
            }

            const reason = !isLeaf
              ? "terminal_non_leaf_consumed_all_tokens"
              : remainingTokens > 0
              ? "terminal_leaf_accept_with_remaining"
              : tailIgnoredCount > 0
              ? "terminal_leaf_accept_with_trailing_tokens"
              : "terminal_leaf_accept";

            attempt.matched = true;
            attempt.decision = {
              type: "accept",
              reason,
              uprn: node.uprn ?? null,
              node,
              remainingTokens,
              isLeaf,
              consumedCount: consumedSorted.length,
              skippedCount: skippedSorted.length
            };

            recordEvent("accept", {
              reason,
              node,
              remainingTokens,
              uprn: node.uprn ?? null
            });

            return buildResult(attempt, {
              ...contextBase,
              attemptsTried: attemptCounter
            });
          } else if (!trailingWithinLimit) {
            attempt.failure = {
              type: "too_many_trailing_tokens",
              tailIgnoredCount,
              limit: MAX_TRAILING_TOKENS_TO_IGNORE
            };
          }
        }

        const failureReason = (() => {
          if (attempt.failure?.type === "too_many_trailing_tokens") {
            return "terminal_exceeded_trailing_token_limit";
          }
          if (attempt.failure?.type === "mismatch") {
            return "mismatch_no_child";
          }
          if (index >= total && !node.term) {
            return "non_terminal_after_consuming_all";
          }
          if (node.term && node.children.size > 0 && index < total) {
            return "terminal_non_leaf_unconsumed_tokens";
          }
          return "no_accept_condition";
        })();

        attempt.decision = {
          type: "reject",
          reason: failureReason,
          uprn: null,
          node,
          remainingTokens,
          isLeaf: node.children.size === 0,
          consumedCount: consumedSorted.length,
          skippedCount: skippedSorted.length
        };

        recordEvent("reject", {
          reason: failureReason,
          node,
          remainingTokens
        });

        considerBest(attempt);
      }
    }

    const attemptsTried = attemptCounter;
    if (!bestAttempt) {
      bestAttempt = {
        startIndex: 0,
        entryDepth: 0,
        entryPath: [root],
        pathNodes: [root],
        finalIndex: 0,
        events: [],
        consumedIndices: [],
        skippedIndices: [],
        matchedTokens: [],
        skippedTokens: [],
        matched: false,
        decision: {
          type: "reject",
          reason: "no_attempts",
          uprn: null,
          node: root,
          remainingTokens: total,
          isLeaf: root.children.size === 0
        }
      };
    }

    return buildResult(bestAttempt, {
      ...contextBase,
      attemptsTried
    });
  };
}


function _addressTrie(test_addresses,buildReverseTrie)
{
  const lines = test_addresses
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const rows = lines.map((line, index) => [index + 1, line]);

  return buildReverseTrie(rows);
}


function _buildReverseTrie()
{
  class TrieNode {
    constructor() {
      this.children = new Map(); // preserve insertion order for deterministic traversals
      this.uprn = null;
      this.term = 0;
      this.cnt = 0;
    }

    child(token) {
      if (!this.children.has(token)) {
        this.children.set(token, new TrieNode());
      }
      return this.children.get(token);
    }
  }

  const dfsCnt = (node) => {
    let total = node.term ? 1 : 0;
    for (const child of node.children.values()) {
      total += dfsCnt(child);
    }
    node.cnt = total;
    return total;
  };

  const build = (rows) => {
    const root = new TrieNode();

    for (const [uprn, text] of rows) {
      const tokens = text.split(" ").reverse();
      let node = root;

      for (const token of tokens) {
        node = node.child(token);
      }

      node.term = 1;
      node.uprn = uprn;
    }

    dfsCnt(root);
    return root;
  };

  build.Node = TrieNode;
  build.dfsCnt = dfsCnt;

  return build;
}


function _show_trie_using_d3(d3)
{
  // Convert your Map-based trie into a D3-friendly object
  function trieToHierarchy(rootTrie) {
    function nodeToObj(label, node) {
      return {
        name: label,
        uprn: node?.uprn ?? null,
        cnt: node?.cnt ?? 0,
        term: node?.term ?? 0,
        children: node?.children
          ? Array.from(node.children.entries(), ([tok, child]) =>
              nodeToObj(tok, child)
            )
          : []
      };
    }
    if (!rootTrie)
      return { name: "root", uprn: null, cnt: 0, term: 0, children: [] };
    return nodeToObj("root", rootTrie);
  }

  // Renderer
  function render(
    trie,
    {
      nodeSize = 18,
      paddingRight = 40,
      terminalColor = "#1f77b4", // bright blue
      bulletRadius = 3.5 // slightly bigger than before
    } = {}
  ) {
    const data = trieToHierarchy(trie);

    const root = d3.hierarchy(data).eachBefore(
      (
        (i = 0) =>
        (d) =>
          (d.index = i++)
      )()
    );
    const nodes = root.descendants();

    // Right-side columns (with per-column fill styling)
    const columns = [
      { label: "UPRN", x: 380, format: (d) => d.data.uprn ?? "-" },
      { label: "count", x: 460, format: (d) => d.data.cnt },
      {
        label: "terminal",
        x: 560,
        format: (d) => (d.data.term ? "✓" : ""),
        fill: (d) => (d.data.term ? terminalColor : "#444")
      }
    ];

    const width = Math.max(
      640,
      (columns.length ? d3.max(columns, (c) => c.x) : 0) + paddingRight
    );
    const height = (nodes.length + 1) * nodeSize;

    const svg = d3
      .create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-nodeSize / 2, (-nodeSize * 3) / 2, width, height])
      .attr(
        "style",
        "max-width: 100%; height: auto; font: 11px system-ui, sans-serif; overflow: visible;"
      );

    // Links
    svg
      .append("g")
      .attr("fill", "none")
      .attr("stroke", "#b3b3b3")
      .selectAll()
      .data(root.links())
      .join("path")
      .attr(
        "d",
        (d) => `
        M${d.source.depth * nodeSize},${d.source.index * nodeSize}
        V${d.target.index * nodeSize}
        h${nodeSize}
      `
      );

    // Nodes (one row per node)
    const gNode = svg
      .append("g")
      .selectAll()
      .data(nodes)
      .join("g")
      .attr("transform", (d) => `translate(0,${d.index * nodeSize})`);

    // Bullet: terminal => green outline, no fill; otherwise grey filled
    gNode
      .append("circle")
      .attr("cx", (d) => d.depth * nodeSize)
      .attr("r", bulletRadius)
      .attr("fill", (d) => (d.data.term ? terminalColor : "#999"))
      .attr("stroke", (d) => (d.data.term ? terminalColor : null))
      .attr("stroke-width", (d) => (d.data.term ? 1.5 : null));

    // Label (token)
    gNode
      .append("text")
      .attr("dy", "0.32em")
      .attr("x", (d) => d.depth * nodeSize + 6)
      .attr("fill", "#111")
      .text((d) => d.data.name);

    // Tooltip
    gNode.append("title").text(
      (d) =>
        `${d
          .ancestors()
          .reverse()
          .map((a) => a.data.name)
          .join(" / ")}\n` +
        `uprn=${d.data.uprn ?? 0}  count=${d.data.cnt}  terminal=${
          d.data.term ? "yes" : "no"
        }`
    );

    // Column headers + values
    for (const { label, x, format, fill } of columns) {
      svg
        .append("text")
        .attr("dy", "0.32em")
        .attr("y", -nodeSize)
        .attr("x", x)
        .attr("text-anchor", "end")
        .attr("font-weight", "bold")
        .text(label);

      gNode
        .append("text")
        .attr("dy", "0.32em")
        .attr("x", x)
        .attr("text-anchor", "end")
        .attr("fill", (d) => (fill ? fill(d) : "#444"))
        .text((d) => format(d));
    }

    return svg.node();
  }

  return render;
}


function _example_trie_for_blog(show_trie_using_d3,trie_for_blog){return(
show_trie_using_d3(trie_for_blog)
)}

function _trie_for_blog(hard_coded_addresses,buildReverseTrie)
{
  const lines = hard_coded_addresses
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const rows = lines.map((line, index) => [index + 1, line]);

  return buildReverseTrie(rows);
}


function _hard_coded_addresses(){return(
`1 HIGH STREET WESTMINSTER
2 HIGH STREET WESTMINSTER
3 HIGH STREET WESTMINSTER
FLAT A 3 HIGH STREET WESTMINSTER
FLAT B 3 HIGH STREET WESTMINSTER
4 HIGH STREET WESTMINSTER
5 HIGH STREET WESTMINSTER
ANNEX 5 HIGH STREET WESTMINSTER`
)}

function _initial_list_of_addresses(){return(
`1 RAINBOW ROAD ABBOTS LANGLEY
2 RAINBOW ROAD ABBOTS LANGLEY
3 RAINBOW ROAD ABBOTS LANGLEY
FLAT A 3 RAINBOW ROAD ABBOTS LANGLEY
FLAT B 3 RAINBOW ROAD ABBOTS LANGLEY
4 RAINBOW ROAD ABBOTS LANGLEY
5 RAINBOW ROAD ABBOTS LANGLEY
ANNEX 5 RAINBOW ROAD ABBOTS LANGLEY
8 RAINBOW ROAD ABBOTS LANGLEY
MY LONG BUSINESS NAME 9 RAINBOW ROAD ABBOTS LANGLEY`
)}

function _initial_list_of_addresses_md(md,initial_list_of_addresses)
{
  return md`
\`\`\`txt
${initial_list_of_addresses}
\`\`\`

`;
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof test_addresses")).define("viewof test_addresses", ["Inputs","initial_list_of_addresses"], _test_addresses);
  main.variable(observer("test_addresses")).define("test_addresses", ["Generators", "viewof test_addresses"], (G, _) => G.input(_));
  main.variable(observer("viewof messy_address_to_lookup")).define("viewof messy_address_to_lookup", ["Inputs"], _messy_address_to_lookup);
  main.variable(observer("messy_address_to_lookup")).define("messy_address_to_lookup", ["Generators", "viewof messy_address_to_lookup"], (G, _) => G.input(_));
  main.variable(observer("trie_basic")).define("trie_basic", ["show_trie_using_d3","addressTrie"], _trie_basic);
  main.variable(observer("trie_with_route")).define("trie_with_route", ["show_highlighted_trie_using_d3","messy_address_to_lookup","addressTrie"], _trie_with_route);
  main.variable(observer("show_highlighted_trie_using_d3")).define("show_highlighted_trie_using_d3", ["d3","addressTrie","traceAddressRoute","renderTraceStepsTable","md"], _show_highlighted_trie_using_d3);
  main.variable(observer("renderTraceStepsTable")).define("renderTraceStepsTable", _renderTraceStepsTable);
  main.variable(observer("traceAddressRoute")).define("traceAddressRoute", ["addressTrie"], _traceAddressRoute);
  main.variable(observer("addressTrie")).define("addressTrie", ["test_addresses","buildReverseTrie"], _addressTrie);
  main.variable(observer("buildReverseTrie")).define("buildReverseTrie", _buildReverseTrie);
  const child1 = runtime.module(define1);
  main.import("Textarea", child1);
  main.variable(observer("show_trie_using_d3")).define("show_trie_using_d3", ["d3"], _show_trie_using_d3);
  main.variable(observer("example_trie_for_blog")).define("example_trie_for_blog", ["show_trie_using_d3","trie_for_blog"], _example_trie_for_blog);
  main.variable(observer("trie_for_blog")).define("trie_for_blog", ["hard_coded_addresses","buildReverseTrie"], _trie_for_blog);
  main.variable(observer("hard_coded_addresses")).define("hard_coded_addresses", _hard_coded_addresses);
  main.variable(observer("initial_list_of_addresses")).define("initial_list_of_addresses", _initial_list_of_addresses);
  main.variable(observer("initial_list_of_addresses_md")).define("initial_list_of_addresses_md", ["md","initial_list_of_addresses"], _initial_list_of_addresses_md);
  return main;
}
