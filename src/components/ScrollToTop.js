export default function ScrollToTop() {
  return (
    <button 
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 15px',
        background: '#0070f3',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      ↑ Scroll to Top
    </button>
  )
}