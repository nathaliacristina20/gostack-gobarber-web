import React, { useState } from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Calendar,
  Appointment,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo (a),</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="http://localhost:3333/files/ffb2d35272f5b1e11588-cliente.jpg"
                alt="Nome"
              />

              <strong>Diego Fernandades</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manha</strong>

            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>
              <div>
                <img
                  src="http://localhost:3333/files/ffb2d35272f5b1e11588-cliente.jpg"
                  alt="Nome"
                />

                <strong>Diego Fernandades</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>
              <div>
                <img
                  src="http://localhost:3333/files/ffb2d35272f5b1e11588-cliente.jpg"
                  alt="Nome"
                />

                <strong>Diego Fernandades</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>
              <div>
                <img
                  src="http://localhost:3333/files/ffb2d35272f5b1e11588-cliente.jpg"
                  alt="Nome"
                />

                <strong>Diego Fernandades</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>
              <div>
                <img
                  src="http://localhost:3333/files/ffb2d35272f5b1e11588-cliente.jpg"
                  alt="Nome"
                />

                <strong>Diego Fernandades</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>
              <div>
                <img
                  src="http://localhost:3333/files/ffb2d35272f5b1e11588-cliente.jpg"
                  alt="Nome"
                />

                <strong>Diego Fernandades</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>Calendar</Calendar>
      </Content>
    </Container>
  );
};
export default Dashboard;
