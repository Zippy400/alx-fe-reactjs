function MainContent() {
  return (
    <main>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;


const MainContent = () => {
  return (
    <main style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ fontSize: '18px' }}>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
};

export default MainContent;

