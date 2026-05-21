import React, { useState } from 'react'; // Importamos useState para controlar el fallo de carga
import { Navbar, Nav, Container, Row, Col, Card } from 'react-bootstrap';
import { BsEmojiWinkFill, BsEmojiSmileFill, BsEnvelopeFill, BsInstagram, BsCheckCircleFill, BsExclamationCircleFill } from 'react-icons/bs';
import './App.css';

function App() {
  // Estado para controlar si el logo del Hero falla al cargar
  const [heroLogoFailed, setHeroLogoFailed] = useState(false);
  const [mensajeEjercicio, setMensajeEjercicio] = useState(null);

  const verificarRespuesta = (esCorrecta) => {
    if (esCorrecta) {
      setMensajeEjercicio({
        tipo: 'success',
        texto: '¡Excelente! 8 es la respuesta correcta.'
      });
    } else {
      setMensajeEjercicio({
        tipo: 'danger',
        texto: 'Esa no es la cantidad correcta, ¡intentá de nuevo!'
      });
    }
  };

  return (
    <div>
      {/* Barra de Navegación */}
      <Navbar bg="white" expand="lg" fixed="top" className="navbar">
        <Container>
          <Navbar.Brand href="#inicio" className="d-flex align-items-center">
            <img 
              src="/logo.png" 
              alt="CAPNEE Logo" 
              className="d-inline-block align-top me-2" 
              style={{ height: '50px', width: 'auto', objectFit: 'contain' }} 
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link href="#inicio" className="text-capnee-purple">Inicio</Nav.Link>
              <Nav.Link href="#proyecto" className="text-capnee-purple">El Proyecto</Nav.Link>
              <Nav.Link href="#funcionamiento" className="text-capnee-purple">¿Cómo Funciona?</Nav.Link>
              <Nav.Link href="#ejemplo" className="text-capnee-purple">Ejemplo Interactivo</Nav.Link>
              <Nav.Link href="#tecnologias" className="text-capnee-purple">Tecnologías</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Margen para que el navbar fixed no tape el contenido */}
      <div style={{ marginTop: '76px' }}></div>

      {/* Sección Inicio / Hero */}
      <section id="inicio" className="bg-capnee-login section-padding text-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              {/* Título condicional: muestra la imagen o el texto si falla */}
              <h1 className="display-4 fw-bold mb-3">
                {!heroLogoFailed ? (
                  <img 
                    src="/logo.png" 
                    alt="Proyecto CAPNEE" 
                    onError={() => setHeroLogoFailed(true)} 
                    style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }}
                    className="img-fluid my-2"
                  />
                ) : (
                  "Proyecto CAPNEE"
                )}
              </h1>
              <p className="lead mb-4 fw-semibold">
                Cálculo Aritmético en Personas con Necesidades Educativas Especiales.
              </p>
              <p className="fs-5 bg-white text-capnee-purple p-3 rounded-4 d-inline-block shadow-sm fw-bold">
                Un proyecto del Laboratorio GIDAS (Grupo de Investigación y Desarrollo Aplicados a Sistemas Informáticos y Computacionales)
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección El Proyecto */}
      <section id="proyecto" className="section-padding bg-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="text-capnee-purple fw-bold mb-4">¿De qué trata el proyecto?</h2>
              <p className="fs-5">
                CAPNEE es una aplicación educativa orientada a la enseñanza de matemática básica, especialmente diseñada para estudiantes con discapacidad neuromotriz. 
                Nuestro objetivo es facilitar la interacción con contenidos educativos a través de mecanismos alternativos al uso tradicional del teclado o la pantalla táctil.
              </p>
              <p className="fs-5">
                Abordamos la discapacidad desde un paradigma social: <strong>la discapacidad está en los contextos, no en las personas</strong>. Eliminar las barreras tecnológicas promueve un aprendizaje mucho más autónomo.
              </p>
            </Col>
            <Col md={6}>
              <Card className="card-custom bg-capnee-menu p-4 text-center">
                <Card.Body>
                  <h4 className="fw-bold mb-3">Nuestra Filosofía</h4>
                  <p className="fs-5 mb-0 text-dark">
                    Buscamos aportar equidad para que nadie se pierda la oportunidad de aprender matemáticas, basándonos en los principios del Diseño Universal: Invisibilidad, Ubicuidad y Adaptabilidad.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección Funcionamiento */}
      <section id="funcionamiento" className="section-padding bg-light">
        <Container>
          <h2 className="text-center text-capnee-purple fw-bold mb-5">¿Cómo funcionan las apps?</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="card-custom h-100">
                <Card.Body className="p-4">
                  <h4 className="text-capnee-purple fw-bold mb-3">Para Docentes (App Web)</h4>
                  <p className="fs-5">
                    Permite a los educadores gestionar cursos, administrar bloques temáticos y crear ejercicios personalizados adaptados a las necesidades de sus alumnos.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="card-custom h-100">
                <Card.Body className="p-4">
                  <h4 className="text-capnee-purple fw-bold mb-3">Para Alumnos (App Móvil)</h4>
                  <p className="fs-5">
                    Permite resolver los ejercicios planteados contando con una opción de accesibilidad innovadora: su manejo a través de gestos faciales sin contacto físico.
                  </p>
                  <ul className="list-unstyled fs-5 mt-3">
                    <li className="mb-3 d-flex align-items-center">
                      {/* size={28} clava el tamaño, flex-shrink-0 evita que se aplaste */}
                      <BsEmojiWinkFill size={28} className="text-secondary me-3 flex-shrink-0" /> 
                      <span><strong className="text-capnee-purple">Guiño izquierdo:</strong> Volver a la pantalla anterior.</span>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <BsEmojiWinkFill size={28} className="text-secondary me-3 flex-shrink-0" /> 
                      <span><strong className="text-capnee-purple">Guiño derecho:</strong> Siguiente botón.</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <BsEmojiSmileFill size={28} className="text-secondary me-3 flex-shrink-0" /> 
                      <span><strong className="text-capnee-purple">Sonrisa:</strong> Presionar botón / Seleccionar.</span>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección Ejemplo Interactivo */}
      <section id="ejemplo" className="section-padding bg-capnee-actividades">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h2 className="fw-bold text-dark mb-4">Ejemplo de Ejercicio</h2>
              <Card className="card-custom p-4 bg-white">
                <Card.Body>
                  <img 
                    src="/ejercicio.jpg" 
                    alt="Ejercicio de Galletitas" 
                    className="img-fluid rounded-4 mb-4 shadow-sm" 
                    style={{ maxHeight: '280px' }}
                  />
                  <h4 className="text-dark mb-4 fw-bold">
                    "Si llevamos las galletitas que están en los platos azul y verde, al plato amarillo. ¿Cuántas galletitas quedarán en el plato amarillo?"
                  </h4>
                  {/* Botones Interactivos */}
                  <div className="d-flex justify-content-center gap-3">
                    <button 
                      onClick={() => verificarRespuesta(false)} 
                      className="btn btn-capnee-primary btn-lg fw-bold px-4 rounded-3 shadow-sm"
                    >
                      6
                    </button>
                    
                    <button 
                      onClick={() => verificarRespuesta(true)} 
                      className="btn btn-capnee-primary btn-lg fw-bold px-4 rounded-3 shadow-sm"
                    >
                      8
                    </button>
                    
                    <button 
                      onClick={() => verificarRespuesta(false)} 
                      className="btn btn-capnee-primary btn-lg fw-bold px-4 rounded-3 shadow-sm"
                    >
                      9
                    </button>
                  </div>

                  {/* Mensaje de respuesta condicional con iconos de React */}
                  {mensajeEjercicio && (
                    <div 
                      className={`alert mt-4 mensaje-animado d-flex align-items-center justify-content-center ${mensajeEjercicio.tipo === 'success' ? 'alert-success' : 'alert-danger'} shadow-sm`} 
                      role="alert"
                    >
                      {mensajeEjercicio.tipo === 'success' ? (
                        <BsCheckCircleFill className="fs-4 me-2" />
                      ) : (
                        <BsExclamationCircleFill className="fs-4 me-2" />
                      )}
                      <h5 className="mb-0 fw-bold">{mensajeEjercicio.texto}</h5>
                    </div>
                  )}
                  <p className="text-muted mt-4 small">
                    El alumno seleccionaría la respuesta correcta ('8') navegando con los guiños y confirmando con una sonrisa facial.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección Tecnologías y Futuro */}
      <section id="tecnologias" className="section-padding bg-white">
        <Container>
          <h2 className="text-center text-capnee-purple fw-bold mb-5">Tecnologías y Desafíos</h2>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <h4 className="fw-bold mb-3 text-capnee-purple">Stack Tecnológico</h4>
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item"><strong>Frontend:</strong> React.js (Web) y React Native (Móvil).</li>
                <li className="list-group-item"><strong>Backend:</strong> Spring Boot (Java).</li>
                <li className="list-group-item"><strong>Reconocimiento Facial:</strong> ML Kit via react-native-vision-camera.</li>
                <li className="list-group-item"><strong>Infraestructura:</strong> Docker, Jenkins (CI/CD) y AWS/DonWeb.</li>
              </ul>
            </Col>
            <Col md={6}>
              <h4 className="fw-bold mb-3 text-capnee-purple">Desafíos a Futuro</h4>
              <p className="fs-5">
                Para este año, uno de los mayores desafíos es migrar el motor de reconocimiento hacia <strong>MediaPipe</strong> para obtener mayor precisión en la detección y seguimiento facial.
              </p>
              <p className="fs-5">
                Además, planeamos iniciar pruebas piloto con institutos de formación docente en educación especial, y expandir la accesibilidad añadiendo navegación por comandos de voz.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <Container>
          {/* Centrado en mobile (text-center) y alineado a la izquierda en desktop (text-md-start) */}
          <Row className="align-items-center justify-content-center text-center text-md-start mb-4">
            
            {/* Columna del Logo (más pequeño, de costado) */}
            <Col md={3} className="text-center mb-4 mb-md-0">
              <img 
                src="/logo-gidas.png" 
                alt="Logo Laboratorio GIDAS" 
                className="img-fluid bg-white p-2 rounded-3 shadow-sm"
                style={{ maxHeight: '55px', objectFit: 'contain' }} 
              />
            </Col>
            
            {/* Columna de la Información de Contacto */}
            <Col md={7}>
              <h5 className="fw-bold mb-2" style={{ color: 'var(--capnee-bg-actividades)' }}>
                ¿Querés sumarte o recibir más información? ¡Contactanos!
              </h5>
              
              <p className="fs-6 mb-2 d-flex align-items-center">
                <BsEnvelopeFill className="me-2 fs-5" /> Correo:&nbsp;
                <a href="mailto:gidas@frlp.utn.edu.ar" className="text-white fw-semibold text-decoration-none" style={{ transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = '0.8'} onMouseOut={(e) => e.target.style.opacity = '1'}>
                  gidas@frlp.utn.edu.ar
                </a>
              </p>
              
              <p className="fs-6 mb-0 d-flex align-items-center">
                <BsInstagram className="me-2 fs-5" /> Instagram:&nbsp;
                <a href="https://instagram.com/gidas.utn.frlp" target="_blank" rel="noreferrer" className="text-white fw-semibold text-decoration-none" style={{ transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = '0.8'} onMouseOut={(e) => e.target.style.opacity = '1'}>
                  @gidas.utn.frlp
                </a>
              </p>
            </Col>
            
          </Row>
          
          <hr className="border-secondary" />
          
          <p className="mb-0 text-center text-secondary small">
            © 2026 Proyecto CAPNEE - Laboratorio GIDAS. Todos los derechos reservados.
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;