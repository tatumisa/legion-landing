export function createFeatures() {
  return `
    <section class="features" id="features">
      <div class="container">
        <div class="section-header">
          <h2>Intelligent Data Cleaning at Scale</h2>
          <p>Our AI-powered platform tackles the three most critical data quality challenges with precision and efficiency.</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon eliminate">🚫</div>
            <h3>Eliminate Impossible Values</h3>
            <p>Automatically detect and remove logically impossible data points that compromise your analysis integrity.</p>
            <ul class="feature-list">
              <li>Negative ages and impossible dates</li>
              <li>Out-of-range measurements</li>
              <li>Contradictory categorical values</li>
              <li>Statistical outliers and anomalies</li>
              <li>Cross-field validation errors</li>
            </ul>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon standardize">⚡</div>
            <h3>Standardize Values</h3>
            <p>Transform inconsistent data formats into unified, analysis-ready standards across your entire dataset.</p>
            <ul class="feature-list">
              <li>Date and time format normalization</li>
              <li>Address and location standardization</li>
              <li>Currency and unit conversions</li>
              <li>Text case and encoding fixes</li>
              <li>Category mapping and consolidation</li>
            </ul>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon fix">🔧</div>
            <h3>Fix Missingness</h3>
            <p>Intelligently impute missing values using advanced ML algorithms tailored to your data patterns.</p>
            <ul class="feature-list">
              <li>Context-aware value prediction</li>
              <li>Multiple imputation strategies</li>
              <li>Temporal pattern recognition</li>
              <li>Relationship-based inference</li>
              <li>Confidence scoring for predictions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
}