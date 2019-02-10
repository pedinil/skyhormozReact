import React from 'react'

const SearchBox = ({ Searchfield, searchchange }) => {
    return (
        <div>
            <div class="search">
                <div class="col-md-12 col-md-offset-1">
                    <div class="row form-section">
                        <div class="col-md-4">

                            <label class="sr-only" >Hotel Name</label>
                            <input type="text" className="form-control" onChange={searchchange} placeholder="Hotel Name" />

                        </div>
                        <div class="col-md-2">

                            <label class="sr-only" >Hotel-Names</label>
                            <select class="form-control" placeholder="Select Hotel" onChange={searchchange} >
                                <option value="" disabled selected>Hotels</option>
                                <option value="1">Hotel1</option>
                                <option value="H2">H2</option>
                                <option value="H3">H3</option>
                                <option value="H4">H4</option>
                                <option value="H5">H5</option>
                            </select>

                        </div>
                        <div class="col-md-2">
                            <label class="sr-only" >Stars</label>
                            <select name="Stars-number" class="form-control" onChange={searchchange}>
                                <option value="" disabled selected>Stars</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                        </div>


                    </div>

                </div>

            </div>



        </div>
    );

}
export default SearchBox;