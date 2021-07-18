import Image from 'next/image';
import ProfileSidebarMenuDefault from '../ProfileSidebarMenuDefault';

export default function MenuProfileSidebar({ githubUser }) {
  return (
    <div className="menuProfileSidebar">
      <div>
        <div style={{ borderRadius: 8 }}>
          <Image
            height={200}
            width={200}
            src={`https://github.com/${githubUser}.png`}
          />
        </div>

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
