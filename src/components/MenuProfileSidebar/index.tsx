import ProfileSidebarMenuDefault from '../ProfileSidebarMenuDefault';

export default function ({ githubUser }) {
  return (
    <div className="menuProfileSidebar">
      <div>
        <img
          src={`https://github.com/${githubUser}.png`}
          style={{ borderRadius: '8px' }}
        />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />

        <ProfileSidebarMenuDefault />
      </div>
    </div>
  );
}
