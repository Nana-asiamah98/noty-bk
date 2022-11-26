export const Email1 = 
`<div id="i7c3" class="row" style="box-sizing: border-box; display: table; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; width: 100%; height: 478px;">
<div id="im9v" class="cell" style="box-sizing: border-box; width: 8%; display: table-cell; height: 75px; background-color: #acb8df;">
  <div id="i24v" class="row" style="box-sizing: border-box; display: table; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; width: 100%;">
    <div id="ieu2" class="cell" style="box-sizing: border-box; width: 8%; display: table-cell; height: 75px; background-color: #ebe7e7;">
      <div id="iyla" style="box-sizing: border-box; padding: 10px; font-family: Courier New, Courier, monospace; text-align: center; font-size: 25px;">Hello, User
      </div>
    </div>
  </div>
  <table id="ik7h" style="box-sizing: border-box; height: 150px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;" width="100%" height="150">
    <tbody style="box-sizing: border-box;">
      <tr style="box-sizing: border-box;">
      </tr>
    </tbody>
  </table>
</div>
</div>
<style>
@media (max-width: 768px) {
  .cell {
    width: 100%;
    display: block;
  }
}
</style>`;

export const EPAComplaint : string = `<html>
<head>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
    }
    #izad {
      height: 150px;
      margin: 0 auto 10px auto;
      padding: 5px 5px 5px 5px;
      width: 100%;
    }
    #izlk {
      padding: 0;
      margin: 0;
      vertical-align: top;
      background-color: #fdb725;
    }
    #i4rl {
      height: 150px;
      margin: 0 auto 10px auto;
      padding: 5px 5px 5px 5px;
      width: 100%;
    }
    #i3p3 {
      padding: 0;
      margin: 0;
      vertical-align: top;
      width: 50%;
    }
    #ipf4 {
      padding: 0;
      margin: 0;
      vertical-align: top;
      width: 50%;
    }
    #i70j4 {
      color: black;
    }
    #i6m0p {
      padding: 10px;
      color: #451717;
      font-size: 34px;
      font-family: Impact, Charcoal, sans-serif;
    }
    #iflr8 {
      height: 150px;
      margin: 0 auto 10px auto;
      padding: 5px 5px 5px 5px;
      width: 100%;
    }
    #ikkzl {
      padding: 0;
      margin: 0;
      vertical-align: top;
      color: #a77a7a;
      background-color: #d6c687;
    }
    .divider {
      background-color: rgba(252, 255, 250, 0.81);
      height: 50px;
      border-collapse: separate;
    }
    #iq363 {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    #i8hiu {
      padding: 10px;
      text-align: center;
      font-size: 31px;
      font-family: Lucida Sans Unicode, Lucida Grande, sans-serif;
    }
    .heading {
      font-size: 23px;
    }
    #ibhy3 {
      height: 150px;
      margin: 0 auto 10px auto;
      padding: 5px 5px 5px 5px;
      width: 100%;
    }
    #ihmq8 {
      padding: 0;
      margin: 0;
      vertical-align: top;
      background-color: #e4b744;
    }
    #ikl3i {
      padding: 10px;
      text-align: center;
      color: #000000;
      margin: 48px 0 0 0;
    }
    #i59m5 {
      font-family: arial, sans-serif;
      font-size: 14px;
      text-align: left;
      color: #000000;
    }
  </style>
</head>
<body id="iyet">
  <table id="izad">
    <tbody>
      <tr>
        <td id="izlk">
          <table id="i4rl">
            <tbody>
              <tr>
                <td id="i3p3">
                  <img
                    id="i70j4"
                    src="http://www.epa.gov.gh/epa/sites/default/files/epa-logo.png"
                  />
                </td>
                <td id="ipf4">
                  <div id="i6m0p"><b id="ix9w8">A Complaint Template</b></div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  <table id="iflr8">
    <tbody>
      <tr>
        <td id="ikkzl">
          <table id="iq363">
            <tbody id="iiwzu">
              <tr id="ieoqm">
                <td class="divider">
                  <div id="i8hiu">Hello, {{name}}</div>
                </td>
              </tr>
            </tbody>
          </table>
          <h1 class="heading">
            Complaint : Noise Pollution From Church ABC International
          </h1>
          <p class="paragraph">
            We have received your complaint and we&#039;ll kindly attend to
            this issue as soon as possible. <br />Our team are ready to
            complete the task and we will give you a response soon.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <table id="ibhy3">
    <tbody>
      <tr>
        <td id="ihmq8">
          <div id="ikl3i">EPA <span id="i59m5">© 2022</span></div>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>
`;

let templateSample:TemplateSample = { body : "" , style : ""};
templateSample.body  = `<body id="iyet">
<table id="izad">
  <tbody>
    <tr>
      <td id="izlk">
        <table id="i4rl">
          <tbody>
            <tr>
              <td id="i3p3">
                <img
                  id="i70j4"
                  src="http://www.epa.gov.gh/epa/sites/default/files/epa-logo.png"
                />
              </td>
              <td id="ipf4">
                <div id="i6m0p"><b id="ix9w8">A Complaint Template</b></div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<table id="iflr8">
  <tbody>
    <tr>
      <td id="ikkzl">
        <table id="iq363">
          <tbody id="iiwzu">
            <tr id="ieoqm">
              <td class="divider">
                <div id="i8hiu">Hello, {{name}}</div>
              </td>
            </tr>
          </tbody>
        </table>
        <h1 class="heading">
          Complaint : Noise Pollution From Church ABC International
        </h1>
        <p class="paragraph">
          We have received your complaint and we&#039;ll kindly attend to
          this issue as soon as possible. <br />Our team are ready to
          complete the task and we will give you a response soon.
        </p>
      </td>
    </tr>
  </tbody>
</table>
<table id="ibhy3">
  <tbody>
    <tr>
      <td id="ihmq8">
        <div id="ikl3i">EPA <span id="i59m5">© 2022</span></div>
      </td>
    </tr>
  </tbody>
</table>
</body>`.replace(/\s/g, " ");
templateSample.style = `<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#izad {
  height: 150px;
  margin: 0 auto 10px auto;
  padding: 5px 5px 5px 5px;
  width: 100%;
}
#izlk {
  padding: 0;
  margin: 0;
  vertical-align: top;
  background-color: #fdb725;
}
#i4rl {
  height: 150px;
  margin: 0 auto 10px auto;
  padding: 5px 5px 5px 5px;
  width: 100%;
}
#i3p3 {
  padding: 0;
  margin: 0;
  vertical-align: top;
  width: 50%;
}
#ipf4 {
  padding: 0;
  margin: 0;
  vertical-align: top;
  width: 50%;
}
#i70j4 {
  color: black;
}
#i6m0p {
  padding: 10px;
  color: #451717;
  font-size: 34px;
  font-family: Impact, Charcoal, sans-serif;
}
#iflr8 {
  height: 150px;
  margin: 0 auto 10px auto;
  padding: 5px 5px 5px 5px;
  width: 100%;
}
#ikkzl {
  padding: 0;
  margin: 0;
  vertical-align: top;
  color: #a77a7a;
  background-color: #d6c687;
}
.divider {
  background-color: rgba(252, 255, 250, 0.81);
  height: 50px;
  border-collapse: separate;
}
#iq363 {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
#i8hiu {
  padding: 10px;
  text-align: center;
  font-size: 31px;
  font-family: Lucida Sans Unicode, Lucida Grande, sans-serif;
}
.heading {
  font-size: 23px;
}
#ibhy3 {
  height: 150px;
  margin: 0 auto 10px auto;
  padding: 5px 5px 5px 5px;
  width: 100%;
}
#ihmq8 {
  padding: 0;
  margin: 0;
  vertical-align: top;
  background-color: #e4b744;
}
#ikl3i {
  padding: 10px;
  text-align: center;
  color: #000000;
  margin: 48px 0 0 0;
}
#i59m5 {
  font-family: arial, sans-serif;
  font-size: 14px;
  text-align: left;
  color: #000000;
}
</style>`.replace(/\s/g, "");

export default templateSample;