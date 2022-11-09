// Vanessa Méndez Palacios A01639925
// Challenge 3 - Lines drawing algorithm with OpenGL
// Compile with:
// g++ hello-OpenGL.cpp -o hello-opengl -lglut -lGLU -lGL

#include <GL/glut.h>

void init (void) {
  glClearColor (1.0, 1.0, 1.0, 0.0);
  glMatrixMode (GL_PROJECTION);
  gluOrtho2D (0.0, 400.0, 0.0, 400.0);
}

void lineSegment (void) {
  glClear (GL_COLOR_BUFFER_BIT);

  glColor3f (0.0, 0.4, 0.2);
  glBegin (GL_LINES);
  
    glVertex2i (1, 2);
    glVertex2i (100, 20);
    
    glVertex2i (10, 200);
    glVertex2i (50, 10);
    
    glVertex2i (300,300);
    glVertex2i (10, 10);
    
    glVertex2i (200,300);
    glVertex2i (250,50);
    
    glVertex2i (350,350);
    glVertex2i (100,300);
    
  glEnd ( );
  glFlush ( );
}

void points (void) {
  glClear (GL_COLOR_BUFFER_BIT);
  glColor3f (0.0, 0.4, 0.2);
  glBegin (GL_POINTS);
  for (int i = 0; i<400; i+=5)
    glVertex2i (i, i);
  glEnd ();
  glFlush();
}

int main (int argc, char** argv) {
  glutInit (&argc, argv);
  glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
  glutInitWindowPosition (50, 100);
  glutInitWindowSize (400, 400);
  glutCreateWindow ("An Example OpenGL Program");
  init ();
  glutDisplayFunc(lineSegment);
  glutMainLoop ( );
  return 0;
}
