import { ProfileRelationsBox } from './styles';

interface ProfileRelationsProps {
  title: string;
  data: Array<{
    id: string;
    title: string;
    imageUrl: string;
  }>;
}

const ProfileRelations = ({ title, data }: ProfileRelationsProps) => (
  <ProfileRelationsBox>
    <h2 className="smallTitle">
      {title} ({data.length})
    </h2>

    <ul>
      {data.map(item => (
        <li key={item.id}>
          <a href={`#`}>
            <img src={item.imageUrl} alt={item.title} />
            <span>{item.title}</span>
          </a>
        </li>
      ))}
    </ul>
  </ProfileRelationsBox>
);

export default ProfileRelations;
