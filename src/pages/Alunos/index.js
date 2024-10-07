import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaTrash } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const getData = async () => {
    const response = await axios.get('/alunos');
    setAlunos(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={aluno.id}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="" srcSet="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/alunos/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>

            <Link to={`/alunos/${aluno.id}/delete`}>
              <FaTrash />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
