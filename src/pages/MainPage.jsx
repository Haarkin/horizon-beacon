import MainNavigation from "../components/MainNavigation";

function MainPage() {
    return (
        <div>
          {/* Header */}
          <header>
            {/* Primary Navigation */}
            <MainNavigation />
            
            {/* Auth Links */}
            <nav>
              <ul>
                <li><a href="/signin">Sign In</a></li>
                <li><a href="/signup">Sign Up</a></li>
              </ul>
            </nav>
          </header>
    
          {/* Body */}
          <div>
            {/* Secondary navigation */}
            <nav>
                <ul>
                    <li><a href="/arks">Arks</a></li>
                    <li><a href="/novels">Novels</a></li>
                    <li><a href="/arts">Arts</a></li>
                    <li><a href="/archive">Archive</a></li>
                </ul>
            </nav>
            {/* Title */}
            <h1>Welcome to our website!</h1>
    
            {/* Small Description */}
            <div>
              <p>A small introduction about what our website offers.</p>
            </div>
    
            {/* Bigger Description */}
            <div>
              <p>
                A longer description explaining in more detail what users can expect from our website.
                This could include features, benefits, etc.
              </p>
            </div>
    
            {/* Grids */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {/* Grid Item 1 */}
              <div>
                {/* Content for Grid Item 1 */}
                <h2>Grid Item 1</h2>
                <p>Description of Grid Item 1</p>
              </div>
    
              {/* Grid Item 2 */}
              <div>
                {/* Content for Grid Item 2 */}
                <h2>Grid Item 2</h2>
                <p>Description of Grid Item 2</p>
              </div>
    
              {/* Grid Item 3 */}
              <div>
                {/* Content for Grid Item 3 */}
                <h2>Grid Item 3</h2>
                <p>Description of Grid Item 3</p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default MainPage;