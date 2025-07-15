export function createDemo() {
  return `
    <section class="demo" id="demo">
      <div class="container">
        <div class="demo-content">
          <div class="demo-text">
            <h2>See Legion AI in Action</h2>
            <p>Watch how our intelligent data cleaning engine transforms raw, messy data into pristine datasets ready for analysis in just minutes.</p>
            
            <ol class="demo-steps">
              <li class="demo-step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4>Upload Your Dataset</h4>
                  <p>Simply drag and drop your CSV, Excel, or JSON files</p>
                </div>
              </li>
              <li class="demo-step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4>AI Analysis</h4>
                  <p>Our engine automatically detects data quality issues</p>
                </div>
              </li>
              <li class="demo-step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4>Smart Cleaning</h4>
                  <p>Advanced algorithms fix issues while preserving data integrity</p>
                </div>
              </li>
              <li class="demo-step">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h4>Download Clean Data</h4>
                  <p>Get your perfectly cleaned dataset with detailed reports</p>
                </div>
              </li>
            </ol>
          </div>
          
          <div class="demo-visual">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="standardized">John Smith</td>
                  <td class="fixed">28</td>
                  <td class="standardized">2024-01-15</td>
                  <td class="standardized">Active</td>
                </tr>
                <tr>
                  <td class="standardized">Jane Doe</td>
                  <td class="invalid">-5 → 25</td>
                  <td class="standardized">2024-02-20</td>
                  <td class="fixed">Active</td>
                </tr>
                <tr>
                  <td class="standardized">Bob Johnson</td>
                  <td class="standardized">35</td>
                  <td class="invalid">invalid → 2024-03-10</td>
                  <td class="standardized">Inactive</td>
                </tr>
              </tbody>
            </table>
            <div style="margin-top: 16px; font-size: 12px; color: var(--text-secondary);">
              <span style="color: var(--error-color);">●</span> Issues Detected
              <span style="color: var(--success-color); margin-left: 16px;">●</span> Fixed Values
              <span style="color: var(--primary-color); margin-left: 16px;">●</span> Standardized
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}