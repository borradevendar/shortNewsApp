import React, { Component } from 'react';

export class Newsitem extends Component {
    
    render() {
        let{title,description,imgUrl,url}=this.props
        return (
            <div>
                <div className="card" style={{width: '22rem', margin:'0.5rem'}}>
                    <img src={!imgUrl?"https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2023/06/01092301/FordDrive_2.jpg":imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title?title:""}...</h5>
                        <p className="card-text">{description?description:""}...</p>
                        <a href={url} className="btn  btn-sm btn-outline-primary">Read more</a>
                    </div>
                </div>
            </div>        );
    }
}

export default Newsitem;
