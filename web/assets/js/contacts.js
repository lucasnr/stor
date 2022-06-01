const datatable = document.querySelector('.datatable');

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
  const data = [
    {
      avatar: '../assets/img/avatars/lindsey.png',
      name: 'Lindsey Stroud',
      email: 'lindsey.stroud@gmail.com',
      company: 'Hatchbuck',
      role: 'Manager',
      forecast: '50%',
      recentActivity: '5 minutes ago',
    },
    {
      avatar: '../assets/img/avatars/nicci.png',
      name: 'Nicci Troiani',
      email: 'nicci.troiani@gmail.com',
      company: 'Slack',
      role: 'Manager',
      forecast: '75%',
      recentActivity: '14 minutes ago',
    },
    {
      avatar: '../assets/img/avatars/george.png',
      name: 'George Fields',
      email: 'george.fields@gmail.com',
      company: 'Clockify',
      role: 'CEO',
      forecast: '10%',
      recentActivity: '6 hours ago',
    },
    {
      avatar: '../assets/img/avatars/rebecca.png',
      name: 'Rebecca Moore',
      email: 'rebecca.moore@gmail.com',
      company: 'Upword',
      role: 'Manager',
      forecast: '25%',
      recentActivity: 'Dec 14, 2018',
    },
    {
      avatar: '../assets/img/avatars/jane.png',
      name: 'Jane Doe',
      email: 'jane.doe@gmail.com',
      company: 'Trello',
      role: 'Engineer',
      forecast: '30%',
      recentActivity: 'Dec 12, 2018',
    },
    {
      avatar: '../assets/img/avatars/jones.png',
      name: 'Jones Dermot',
      email: 'dermot.jones@gmail.com',
      company: 'Slack',
      role: 'Developer',
      forecast: '40%',
      recentActivity: 'Dec 11, 2018',
    },
    {
      avatar: '../assets/img/avatars/martin.png',
      name: 'Martin Merces',
      email: 'martin.merces@gmail.com',
      company: 'Google',
      role: 'Manager',
      forecast: '60%',
      recentActivity: 'Dec 9, 2018',
    },
    {
      avatar: '../assets/img/avatars/franz.png',
      name: 'Franz Ferdinand',
      email: 'franz.ferdinand@gmail.com',
      company: 'Facebook',
      role: 'Manager',
      forecast: '100%',
      recentActivity: 'Dec 6, 2018',
    },
    {
      avatar: '../assets/img/avatars/john.png',
      name: 'John Smith',
      email: 'john.smith@gmail.com',
      company: 'Skype',
      role: 'CEO',
      forecast: '75%',
      recentActivity: 'Nov 30, 2018',
    },
    {
      avatar: '../assets/img/avatars/judith.png',
      name: 'Judith Williams',
      email: 'judith.williams@gmail.com',
      company: 'Google',
      role: 'Designer',
      forecast: '45%',
      recentActivity: 'Nov 26, 2018',
    },
  ];

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

createHeader();
createRows();
