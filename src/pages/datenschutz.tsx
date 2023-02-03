import React from 'react';

function datenschutz() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-5xl">
          <h1>Datenschutz</h1>
          <p>
            Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns
            für Ihr Interesse. Im Folgenden informieren wir Sie über den Umgang
            mit Ihren personenbezogenen Daten bei der Nutzung unserer Website.
            Personenbezogene Daten sind hierbei alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <div className="py-16">
            <h2 className="mb-5">
              1. Datenerfassung beim Besuch unserer Website
            </h2>
            <p>
              Bei der bloß informatorischen Nutzung unserer Website, also wenn
              Sie sich nicht registrieren oder uns anderweitig Informationen
              übermitteln, erheben wir nur solche Daten, die Ihr Browser an
              unseren Server übermittelt (sog. „Server-Logfiles“). Wenn Sie
              unsere Website aufrufen, erheben wir die folgenden Daten, die für
              uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:
            </p>
          </div>

          <h2 className="mb-5">2. Mailchimp</h2>
          <p>
            Wir verwenden für unser Kontaktformular Mailchimp von The Rocket
            Science Group, LLC, 675 Ponce de Leon Ave NE Suite 5000, Atlanta, GA
            30308 USA (Mailchimp). Dies ermöglicht uns, mit Ihnen direkt in
            Kontakt zu treten. Zusätzlich analysieren wir Ihr Nutzungsverhalten,
            um unser Angebot zu optimieren.
          </p>

          <p>
            Dafür geben wir folgende personenbezogene Daten an Mailchimp weiter:
            <ul>
              <li>Email Adresse</li>
              <li>Ihren Vornamen</li>
              <li>Ihren Nachnamen</li>
              <li>Ihre Telefonnummer</li>
            </ul>
          </p>

          <p>
            Mailchimp ist Empfänger Ihrer personenbezogenen Daten und als
            Auftragsverarbeiter für uns tätig, soweit es um eine Kontaktaufnahme
            mit Ihnen . Die Verarbeitung der unter diesem Abschnitt angegebenen
            Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne
            Ihre Einwilligung und die Übermittlung Ihrer personenbezogenen
            Daten, können wir keinen Kontakt mit Ihnen aufnehmen.
          </p>

          <p>
            Weitere Informationen zu Widerspruchs- und Beseitigungsmöglichkeiten
            gegenüber Mailchimp finden Sie unter:
            https://mailchimp.com/legal/privacy/#3._Privacy_for_Contacts
          </p>
        </div>
      </section>
    </div>
  );
}

export default datenschutz;
