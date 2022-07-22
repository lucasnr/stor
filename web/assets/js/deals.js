const datatable = document.querySelector('.datatable');

function createHeader() {
  const header = document.createElement('div');
  header.classList.add('row');

  const headers = ['Name', 'Contact', 'Company', 'Description'];
  headers.forEach((text) => {
    const col = document.createElement('div');
    col.classList.add('col-6');
    col.classList.add('col-md-3');
    col.textContent = text;
    header.appendChild(col);
  });

  datatable.appendChild(header);
}

const data = [
  {
    name: 'Flowers from Chrysal',
    contact: 'lindsey.stroud@gmail.com',
    company: 'https://www.chrysal.com/en-us',
    description: 'Our provider of flowers for all occasions',
  },
  {
    name: 'Inks from AkzoNobel',
    contact: 'lindsey.stroud@gmail.com',
    company: 'https://www.akzonobel.com/en',
    description: 'Providing inks for us since we started',
  },
];

function createRows() {
  data.forEach((deal) => {
    const row = document.createElement('div');
    row.classList.add('row');

    function createCol() {
      const col = document.createElement('div');
      col.classList.add('col-6');
      col.classList.add('col-md-3');
      row.appendChild(col);
      return col;
    }

    const name = createCol();
    name.textContent = deal.name;

    const contact = createCol();
    const contactAnchor = document.createElement('a');
    contactAnchor.href = 'mailto:' + deal.contact;
    contactAnchor.classList.add('d-block');
    contactAnchor.classList.add('text-truncate');
    contactAnchor.textContent = deal.contact;
    contact.appendChild(contactAnchor);

    const company = createCol();
    const companyAnchor = document.createElement('a');
    companyAnchor.href = deal.company;
    companyAnchor.target = '_blank';
    companyAnchor.classList.add('d-block');
    companyAnchor.classList.add('text-truncate');
    companyAnchor.textContent = deal.company;
    company.appendChild(companyAnchor);

    const description = createCol();
    description.textContent = deal.description;

    datatable.appendChild(row);
  });
}

createHeader();
createRows();
