import { Container } from './styles';

export default function OrkutNostalgicIconSet(props) {
  return (
    <Container>
      {[
        { name: 'Recados', slug: 'recados', icon: 'book', count: 552 },
        { name: 'Fotos', slug: 'fotos', icon: 'camera', count: 76 },
        { name: 'Videos', slug: 'videos', icon: 'video-camera', count: 98 },
        { name: 'Fãs', slug: 'fas', icon: 'star', count: 467 },
        { name: 'Mensagens', slug: 'mensagens', icon: 'email', count: 100 },
      ].map(({ name, slug, icon, count }) => (
        <li key={`orkut__icon_set__${slug}`}>
          <span
            style={{ gridArea: 'title' }}
            className="OrkutNostalgicIconSet__title"
          >
            {name}
          </span>
          <span
            className="OrkutNostalgicIconSet__number"
            style={{ gridArea: 'number' }}
          >
            <img
              key={`orkut__icon_set__${slug}_img`}
              className="OrkutNostalgicIconSet__iconSample"
              src={`https://alurakut.vercel.app/icons/${icon}.svg`}
            />
            {count}
          </span>
        </li>
      ))}
      {[
        { name: 'Confiável', slug: 'confiavel', icon: 'smile' },
        { name: 'Legal', slug: 'legal', icon: 'cool' },
        { name: 'Sexy', slug: 'sexy', icon: 'heart' },
      ].map(({ name, slug, icon }) => {
        const total = props[slug] ? props[slug] : 2;

        return (
          <li key={`orkut__icon_set__${slug}`}>
            <span className="OrkutNostalgicIconSet__title">{name}</span>
            <span
              className="OrkutNostalgicIconSet__iconComplex OrkutNostalgicIconSet__number"
              style={{ gridArea: 'number' }}
            >
              {[0, 1, 2].map((_, index) => {
                const isHeartActive = index <= total - 1;

                return (
                  <img
                    key={`orkut__icon_set__${slug}_img_${index}`}
                    src={`https://alurakut.vercel.app/icons/${icon}.svg`}
                    style={{
                      marginRight: '2px',
                      opacity: isHeartActive ? 1 : '0.5',
                    }}
                  />
                );
              })}
            </span>
          </li>
        );
      })}
    </Container>
  );
}
