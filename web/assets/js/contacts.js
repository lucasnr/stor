const datatable = document.querySelector('.datatable');
let data = [];

function createHeader() {
  const header = document.createElement('div');
  header.classList.add('row');

  const headers = [
    'Name',
    'E-mail',
    'Company',
    'Role',
    'Forecast',
    'Recent activity',
  ];
  headers.forEach((text) => {
    const col = document.createElement('div');
    col.classList.add('col-6');
    col.classList.add('col-md-2');
    col.textContent = text;
    header.appendChild(col);
  });

  datatable.appendChild(header);
}

function createRows() {
  data.forEach((contact) => {
    const row = document.createElement('div');
    row.classList.add('row');

    function createCol() {
      const col = document.createElement('div');
      col.classList.add('col-6');
      col.classList.add('col-md-2');
      row.appendChild(col);
      return col;
    }

    const avatar = createCol();
    const img = document.createElement('img');
    img.src = contact.avatar;
    img.classList.add('avatar');
    const name = document.createElement('span');
    name.textContent = contact.name;
    name.classList.add('fw-medium');
    avatar.appendChild(img);
    avatar.appendChild(name);

    const email = createCol();
    const anchor = document.createElement('a');
    anchor.href = 'mailto:' + contact.email;
    anchor.classList.add('d-block');
    anchor.classList.add('text-truncate');
    anchor.textContent = contact.email;
    email.appendChild(anchor);

    const company = createCol();
    company.textContent = contact.company;

    const role = createCol();
    role.textContent = contact.role;

    const forecast = createCol();
    forecast.textContent = contact.forecast;

    const recentActivity = createCol();
    recentActivity.textContent = contact.recentActivity;

    datatable.appendChild(row);

    row.onclick = () => {
      location.href = './contact.html';
    };
  });
}

fetch('http://localhost:3000/contacts')
  .then((response) => response.json())
  .then((contacts) => {
    data = contacts;

    createHeader();
    createRows();
  });
