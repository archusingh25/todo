import { useState } from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';

function SignIn() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const onHandleSignOut = () => {
    localStorage.removeItem('');
    window.location.reload();
    return navigate('/');
  };

  return (
    <div>
      {!profile ? (
        <div
          style={{
            display: 'flex',
            maxWidth: '600px',
            justifyContent: 'center',
            margin: '0 auto',
            minHeight: '100vh',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <LoginSocialFacebook
            appId="647117129227654"
            onResolve={(response) => {
              console.log(response);
              navigate('home');
              setProfile(response.data);
            }}
            onReject={(error) => {
              console.log(error);
            }}
          >
            <FacebookLoginButton />
             
          </LoginSocialFacebook>
        </div>
      ) : (
        ''
      )}

      {profile ? (
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Logo</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto align-items-center">
                  <NavLink to="home" className="nav-link">
                    Home
                  </NavLink>
                  <NavLink to="settings" className="nav-link">
                    Settings
                  </NavLink>
                  <NavLink className="px-2">
                    <Navbar.Text>
                      <Image src={profile.picture.data.url} roundedCircle />
                      <span className="px-2">{profile.name}</span>
                    </Navbar.Text>
                  </NavLink>
                  <Button variant="danger" onClick={() => onHandleSignOut()}>
                    Logout
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* <h1>{profile.name}</h1>
          <Image src={profile.picture.data.url} /> */}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default SignIn;
