import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/layout"

import SEO from "../components/seo"
function Index() {

    return (
        <Layout>
            <SEO title="Probabilistic record linkage explorable explanations " description="An set of interactive, explorable explanations of the Fellegi Sunter model of probabilistic record linkage.  " />
            <h1>Probabilistic record linkage</h1>
            <p>
                These pages present some introductory training material on probabilistic record linkage using the Fellegi Sunter model.  Many of the articles are interactive.
            </p>
            <p>This material presents a simplified version of the model used by <a href="https://github.com/moj-analytical-services/splink">Splink</a>, a piece of probabalistic linkage software for which I'm lead developer. </p>
            <p>Many of the graphics presented re-use Splink's graphical output, and the representation of model parameters used is the same as Splink's <a href="https://moj-analytical-services.github.io/splink_settings_editor/">settings object</a></p>
            <h2>Training materials on probabilistic linkage</h2>
            <ol>
                <li><Link to={'/intro_to_probabilistic_linkage/'}>Introduction to Probabalistic Record Linkage using the Fellegi Sunter model</Link>
                </li>
                <li><Link to={'/maths_of_fellegi_sunter/'}>The mathematics of the Fellegi Sunter model</Link>
                </li>
                <li><Link to={'/visualising_fellegi_sunter/'}>Visualising the Fellegi Sunter model
                </Link>
                </li>
                <li><Link to={'/understanding_match_weights/'}>Understanding match weights
                </Link>
                </li>
            </ol>
            <h2>Further reading</h2>
            <h4>Articles about Splink</h4>
            <ol>
                <li><Link to={'/introducing_splink/'}>Fuzzy Matching and Deduplicating Hundreds of Millions of Records using Apache Spark</Link>
                </li>
                <li><a href="https://www.gov.uk/government/publications/joined-up-data-in-government-the-future-of-data-linking-methods/splink-mojs-open-source-library-for-probabilistic-record-linkage-at-scale">Splink: MoJ’s open source library for probabilistic record linkage at scale</a>
                </li>



            </ol>
            <h4>Links to the software</h4>
            <ol>
                <li><a href="https://github.com/moj-analytical-services/splink">Splink homepage</a></li>
                <li><a href="https://github.com/moj-analytical-services/splink_demos">Splink training materials repo</a></li>
                <li><a href="https://mybinder.org/v2/gh/moj-analytical-services/splink_demos/master?urlpath=lab/tree/index.ipynb">Try Splink live in your browser</a>
                </li>
            </ol>

        </Layout>
    )
}

export default Index


