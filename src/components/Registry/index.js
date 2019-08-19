import React, { Component } from 'react';
import './style.css';
import cb from './cb.png';
import ws from './ws.png';
import zola from './zola.png';

class Registry extends Component {
    render() {
        return (
            <div className="container4">
                <div className="row">
                    <div className="col auto">
                        <div className="sectionTitle mb-5">
                            Registry Information
                        </div>
                    </div>
                </div>
                {/*Row One*/}
                <div className="row">
                    {/*Col One*/}
                    <div className="col">
                        <a href="https://www.crateandbarrel.com/gift-registry/steph-willding-and-erv-nevitt/r6025869" target="_blank">
                            <img src={cb} alt=" " />
                        </a>
                    </div>
                    {/*Col Two*/}
                    <div className="col">
                        <a href="https://www.williams-sonoma.com/m/registry/cwjcnczjn8/registry-list.html" target="_blank">
                            <img src={ws} alt=" " />
                        </a>
                    </div>
                    {/*Col Three*/}
                    <div className="col">
                        <a href="https://www.zola.com/registry/stephanderv" target="_blank">
                            <img src={zola} alt=" " />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registry;
