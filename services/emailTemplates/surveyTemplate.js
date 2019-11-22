const { redirectDomain } = require('../../config/keys')

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center">
          <h3>I like your input!</h3>
          <p>Please answer the following questions</p>
          <p>${survey.body}</p>
          <div>
            <a href="${redirectDomain}/surveys/${survey.id }/yes">Yes</a>
            <a href="${redirectDomain}/surveys/${survey.id }/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `
}
