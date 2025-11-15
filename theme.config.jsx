const config = {
  logo: <span style={{ fontWeight: 'bold', fontSize: '18px' }}>SUZAA</span>,
  project: {
    link: 'https://github.com/suzaaglobal/nextdocs'
  },
  docsRepositoryBase: 'https://github.com/suzaaglobal/nextdocs',
  footer: {
    text: 'Suzaa Documentation'
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
    toggleButton: true
  },
  navbar: {
    extraContent: (
      <a 
        href="https://suzaa.com" 
        style={{ 
          marginLeft: 'auto',
          padding: '8px 16px',
          color: '#666',
          textDecoration: 'none',
          fontWeight: 500
        }}
      >
        Home
      </a>
    )
  }
}

export default config
