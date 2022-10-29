const listRepos = async (userName) => {
  const repos = await fetch(
`https://api.github.com/users/${userName}/repos?type=owner&sort=updated`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));


  const markup = repos
    .map(
      (repo) => `
      <li>
        <a href="${repo.html_url}">${repo.name}</a>
        (🌟${repo.stargazers_count})
      </li>
    `
    ).join('')

  const content = document.querySelector('#content');

  content.innerHTML = `<ul>${markup}</ul>`;
}

listRepos('jlengstorf');
