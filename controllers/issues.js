const config = require("../config.js");
const connection = config.connection;

// Get List of Issues
const getIssues = async (req, res) => {
  connection.query("SELECT * FROM reported_issues", function (error, results,fields) {
    if (error) throw error;
    res.send(results);
  });
};

// Create new Issue
const createIssue = async (req, res, next) => {
  const issue = req.body;
  const insertIssue = {
    user_id: issue.user_id,
    issue_id: issue.issue_id,
    priority_id: issue.priority_id,
    status_id: issue.status_id,
    agent_id: issue.agent_id,
    title: issue.title,
    body: issue.body,
    will_notify: issue.will_notify,
  };
  connection.query("INSERT INTO reported_issues SET ?", insertIssue, function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.send("Issue created successfully!");
  });
};

// Get single Issue
const getIssue = async (req, res) => {
  const issueId = req.params.id;
  connection.query(
    "SELECT * FROM reported_issues WHERE id = " + issueId,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
};

// Get List of Issues by Category i.e. Pending, Resolved, In-Progress
const getCategory = async (req, res) => {
  const statusId = req.params.id;
  connection.query(
    "SELECT * FROM reported_issues WHERE status_id = " + statusId,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
};

// Delete an Issue
const deleteIssue = async (req, res) => {
  const issueId = req.params.id;
  connection.query(
    "DELETE FROM reported_issues WHERE id = " + issueId,
    function (error, results, fields) {
      if (error) throw error;
      res.send("Issue deleted successfully!");
    }
  );
};

// Update an Issue (change Status)
const updateIssue = async (req, res) => {
  const issueId = req.params.id;
  const statusId = req.body.status_id;
  connection.query(
    "UPDATE reported_issues SET status_id = ? WHERE id = ?",
    [statusId, issueId],
    function (error, results, fields) {
      if (error) throw error;
      res.send("Issue Status updated successfully!");
    }
  );
};

// Export Route functions
module.exports.getIssues = getIssues;
module.exports.createIssue = createIssue;
module.exports.getIssue = getIssue;
module.exports.deleteIssue = deleteIssue;
module.exports.updateIssue = updateIssue;
module.exports.getCategory = getCategory;
