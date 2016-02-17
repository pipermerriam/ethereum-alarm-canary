Explorer.ExplorerMain = React.createClass({
  render() {
    var dataURL = blockies.create({
      seed:"0x6c8f2a135f6ed072de4503bd7c4999a1a17f824b",
      size: 8,
      scale: 16
    }).toDataURL();
    console.log(dataURL);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="card-deck-wrapper">
              <div className="card-deck">
                <div className="card">
                  <div className="card-block">
                    <div className="pull-xs-left">
                      <Explorer.EthereumAddressIcon address="0x6c8f2a135f6ed072de4503bd7c4999a1a17f824b"/> 
                    </div>
                    <div className="pull-xs-left">
                      <h4 className="card-title">Scheduled Call</h4>
                      <h6 className="card-subtitle text-muted"><code>0x6c8f2a135f6ed072de4503bd7c4999a1a17f824b</code></h6>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Status: Pending</li>
                    <li className="list-group-item">Scheduled By: <code>0x1234</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
