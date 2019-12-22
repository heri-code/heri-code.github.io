var dbPromised = idb.open("Bola", 1, function(upgradeDb) {
    var articlesObjectStore = upgradeDb.createObjectStore("tim", {
      keyPath: "id"
    });
    articlesObjectStore.createIndex("name", "name", { unique: false });
  });

  function saveForLater(data) {
    dbPromised
      .then(function(db) {
        var tx = db.transaction("tim", "readwrite");
        var store = tx.objectStore("tim");
        console.log(data);
        store.add(data);
        return tx.complete;
      })
      .then(function() {
        console.log("Data Scorers berhasil di simpan.");
      });
  }

  function getAll() {
    return new Promise(function(resolve, reject) {
      dbPromised
        .then(function(db) {
          var tx = db.transaction("tim", "readonly");
          var store = tx.objectStore("tim");
          return store.getAll();
        })
        .then(function(data) {
          resolve(data);
        });
    });
  }

  function deleteData(data) {
    dbPromised
    .then(function(db){
      var tx = db.transaction("tim", "readwrite");
      var store = tx.objectStore("tim");
      store.delete(data);
      return tx.complete;
    })
    .then(function(){
      console.log("Data Berhasil Dihapus");
      window.location.reload();
    });
  }
