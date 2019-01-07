import React from 'react'

const SearchBox=({ Searchfield , searchchange })=>{
    return(
        <div class="search-bar row col-lg-9 col-sm-5 col-xs-3 ">
        <div class="col-12 col-md-10 col-lg-8">
            
                <div class="card-body row no-gutters align-items-center">
                    <div class="col">
                        <input class="form-control form-control-lg form-control-borderless" onChange={searchchange} type="search" placeholder="Search Hotel or Location" />
                    </div>
                    
                    <div class="col-auto">
                        <button class="btn btn-lg btn-success" type="submit">Search</button>
                    </div>
                
                </div>
        
        </div>
        
    </div>
    );

}
export default SearchBox;