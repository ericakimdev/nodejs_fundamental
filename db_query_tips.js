getUsers() {
  let sqlParams = {
      secretArn: secretArn,
      resourceArn: resourceArn,
      sql: "SELECT id FROM task WHERE user_ID = :user_ID or :user_ID = ''", //Return the corresponding data if user_ID is not empty or all data if user_ID is empty
      continueAfterTimeout: true,
      includeResultMetadata: true,
      parameters: [{ name: 'user_ID', value: { stringValue: user_ID, }, },]
  }
  return this.executeStatement(sqlParams);
