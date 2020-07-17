import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectSection from "../components/ProjectSection"

const IndexPage = ({data}) => {
  const { projects } = data.allDropboxFolder

  const projectsFiltered = projects.map(project => project.nodes[0])
  .filter(project => project.dropboxImage && project.dropboxMarkdown)
  .sort((a, b) => b.name < a.name ? -1 : 1)

  return(
    <Layout className="" title="">
      <div>
        <div id="Logo" className="div-block-11" />
        <a href="#Logo" data-w-id="a966fe5f-2670-fc7b-b8b1-10ae4b332c77" className="link-block w-inline-block">
          <h1 data-w-id="60c307c2-8379-620e-cd94-9206d5600089" className="heading-2">okin studio</h1>
        </a>
        <div id="footer" className="footer">
          <div className="text-block-3"><a href="#Logo" className="home-link">okin studio</a>, Landshuter Allee 35, 80637 Munich, <a href="mailto:info@okin.studio" className="footer-link">info@okin.studio</a>, <a href="https://www.instagram.com/okin_studio/" target="_blank" rel="noopener noreferrer" className="footer-link">instagram</a></div>
        </div>
        <ProjectSection projects={projectsFiltered} />
        <div className="about">
          <div className="tagline">
            <div className="tagline-about">Info</div>
          </div>
          <p className="about-text">okin studio is a multidisciplinary design studio based in Munich.<br /><br />okin studio<br />Landshuter Allee 35<br />GER 80637 Munich<br /><a href="mailto:info@okin.studio">info@okin.studio<br />‍<br />‍</a>Verantwortlich für den Inhalt der Webseite: okin studio<br />‍Design und Programmierung: Judith Freiberger<br />‍<br />This website and its content is copyright of okin studio. Any redistribution or reproduction of part or all of the contents in any form is prohibited. You may not, except with our express written permission, distribute or commercially exploit the content. Nor may you transmit it or store it in any other website or other form of electronic retrieval system without the prior written permission of okin studio.</p>
        </div>
        <div className="dsvgo">
          <div className="tagline">
            <div className="tagline-about">Datenschutzbestimmungen</div>
          </div>
          <p className="contact">okin studio<br />Landshuter Allee 35<br />GER 80637 Munich<br /><a href="mailto:info@okin.studio">info@okin.studio</a></p>
          <p className="dsvgo-text">Haftungshinweise<br />Die auf dieser Website veröffentlichten Informationen wurden mit größter Sorgfalt zusammengestellt. Dennoch übernimmt der Betreiber keine Haftung für Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Informationen.<br /><br /><strong className="bold-text">Haftung für Links</strong><br />Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br /><br /><strong className="bold-text-2">Urheberrecht</strong><br />Alle Texte, Grafiken und Bilder sowie die Website in Teilen und im Ganzen unterliegen dem Urheberrecht und dürfen ohne Genehmigung von okin studio nicht vervielfältigt werden.<br />‍<br /><strong className="bold-text-3">Datenschutz</strong><br />Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br /><br /><strong className="bold-text-4">Anonyme Auswertung von Benutzerdaten</strong><br />Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (Google). Google Analytics verwendet sog. Cookies, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">Link</a> verfügbare Browser-Plugin herunterladen und installieren. <br />Nähere Informationen hierzu finden Sie <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">hier</a> bzw. <a href="https://www.google.com/intl/de/analytics/privacyoverview.html" target="_blank" rel="noopener noreferrer" className="link-2">hier</a><br />(allgemeine Informationen zu Google Analytics und Datenschutz).<br />Wir weisen Sie darauf hin, dass auf dieser Webseite Google Analytics um den Code gat._anonymizeIp() erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen (sog. IP-Masking) zu gewährleisten.</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    allDropboxFolder(filter: {name: {regex: "/Project/"}}) {
      projects: group(field: id) {
        nodes {
          name
          dropboxMarkdown {
            localFile {
              childMarkdownRemark {
                frontmatter {
                  client
                  location
                  title
                  type
                  year
                }
                html
              }
            }
          }
          dropboxImage {
            localFile {
              childImageSharp {
                fluid {
                  originalName
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`