import { Container } from 'react-bootstrap';
import AppHeader from '../components/AppHeader';
import PageTitle from '../components/PageTitle';
import TodoContent from '../components/TodoContent';

function Homepage() {
  return (
    <Container>
      <PageTitle>TASK LIST</PageTitle>
      <AppHeader />
      <TodoContent />
    </Container>
  );
}

export default Homepage;
