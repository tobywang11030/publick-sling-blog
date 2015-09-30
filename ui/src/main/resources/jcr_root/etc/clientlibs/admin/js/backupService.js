/**
 * Angular service to communicate with the Backup Admin Servlet. This service
 * will get all packages, create packages, delete packages, install packages,
 * and upload packages.
 */
app.factory('BackupService', function($http, formDataObject) {
  var backupFactory = {},
      PATH = '/bin/admin/backup',
      ACTION_CREATE = 'create_package',
      ACTION_INSTALL = 'install_package';

  /**
   * @private
   */
  function post(data) {
    return $http({
      method: 'POST',
      url: PATH,
      data: data,
      transformRequest: formDataObject
    });
  }

  backupFactory.getPackages = function() {
    return $http({
      method: 'GET',
      url: PATH
    });
  };

  backupFactory.createBackup = function(name) {
    return post({
      action: ACTION_CREATE,
      name: name
    });
  };

  backupFactory.installBackup = function(name) {
    return post({
      action: ACTION_INSTALL,
      name: name
    });
  };

  return backupFactory;
});