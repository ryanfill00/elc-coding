/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';


class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    render() {
        const { data } = this.props
        return (
            <section id="home">
                <div className="content">
                    <p>ELC Coding Test...</p>
                </div>
                <div id='grid-container'>
                    {
                        data.map(ele => (
                            <div className='grid-item' key={ele._id}>
                                <div>
                                    <img src={`${ele.picture}`}/>
                                </div>
                                <div>
                                    <span>{ele.name}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }


}

// Export out the React Component
export default Home;
