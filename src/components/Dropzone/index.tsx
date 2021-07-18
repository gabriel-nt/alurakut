import { FormEvent, useCallback, useEffect, useState } from 'react';
import { FiUpload, FiXCircle } from 'react-icons/fi';

import { Container, Box, DeleteIcon } from './styles';

interface Props {
  imageUrl: string;
  onRemove: () => void;
}

const Dropzone: React.FC<Props> = ({ imageUrl, onRemove }) => {
  const [isError, setIsError] = useState(false);
  const [selectedFileUrl, setSelectedFileUrl] = useState(imageUrl);

  useEffect(() => {
    var img = new Image();
    img.src = imageUrl;

    img.onload = function () {
      setSelectedFileUrl(imageUrl);
    };

    img.onerror = function () {
      setSelectedFileUrl('');
    };
  }, [imageUrl]);

  const onClickRemove = useCallback((e: FormEvent) => {
    e.stopPropagation();

    onRemove();
    setIsError(false);
    setSelectedFileUrl('');
  }, []);

  return (
    <Container>
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Thumbnail" />
      ) : (
        <Box>
          <FiUpload />
          <span>Preview da capa da Comunidade</span>
        </Box>
      )}

      {selectedFileUrl && (
        <DeleteIcon onClick={onClickRemove}>
          <FiXCircle />
        </DeleteIcon>
      )}
    </Container>
  );
};

export default Dropzone;
