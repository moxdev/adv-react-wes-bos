import App, { Container } from 'next/app';

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <div>
        <Container>
          <Component />
        </Container>
      </div>
    );
  }
}

export default MyApp;
