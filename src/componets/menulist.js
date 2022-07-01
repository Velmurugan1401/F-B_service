import "../styles/menulist.css";

function Menulist() {
  return (
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col-md-5 col-lg-5 col-sm-12 menu">
          <div class="">
            <select id="inputState" class="form-select">
              <option selected>Royal gold Town</option>

              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div class="mt-1">
            <select id="inputState" class="form-select ">
              <option selected>Royal gold Town</option>

              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div class="mt-1">
            <select id="inputState" class="form-select">
              <option selected>Royal gold Town</option>

              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <input
            class="form-control mt-1"
            type="text"
            placeholder="How Many Pepole?"
            aria-label=".form-control-sm example"
          />
          <div class="input-group mt-1">
            <input
              type="text"
              class="form-control"
              aria-label="Text input with checkbox"
              placeholder="Search Sale Item"
            />
            <div class="input-group-text">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          <div class="input-group mb-1">
            <input
              type="text"
              class="form-control"
              aria-label="Text input with checkbox"
              placeholder="Search Sale Item"
            />
            <div class="input-group-text">
              <i class="fa-solid fa-pencil"></i>
            </div>
            <div class="input-group-text">
              <i class="fa-solid fa-eye"></i>
            </div>
            <div class="input-group-text">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12">
              <table class="table text-center">
                <thead class="table">
                  <tr>
                    <th scope="col">Sale Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">
                      <i class="fa-solid fa-trash-can"></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <i class="fa-solid fa-trash-can" />
                    </td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>

                    <td>
                      <i class="fa-solid fa-trash-can" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-12">
              <span>Items:</span>
              <br />
              <span>total:</span>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-12">
              <span>5</span>
              <br />
              <span>576.9</span>
            </div>
          </div>
          <div class="row mt-4">
            <div
              class="btn-group "
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" class="btn btn-primary">
                <i class="fa-solid fa-ban"></i>&nbsp;&nbsp;Cancel
              </button>

              <button type="button" class="btn btn-success">
                <a href="javascript:void(0)">
                  <i class="fa-solid fa-paper-plane"></i>Send to Kitchen
                </a>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-lg-7 col-sm-12">
          <div class="row">
            <div class="col-sm-12 menu1">
              <button class="menu_items">Royal Suki set</button>
              <button class="menu_items cspace">Vegitables</button>
              <button class="menu_items cspace">Noodles</button>
              <button class="menu_items cspace">Chicken</button>
              <button class="menu_items cspace">Alcohol</button>
            </div>
          </div>
          <hr />
          <div class="row ">
            <div class="row cardrow">
              <div class="col-lg-2 col-md-4 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>

              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
              <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="card ">
                  <div class="card-body">
                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}
                  </div>
                </div>
                <div class="menucard">
                  <p class="card_paragraph">Aballon Slice</p>
                  <span>$.0998</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menulist;
