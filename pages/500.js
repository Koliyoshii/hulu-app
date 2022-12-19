import React from "react";

function ErrorPage() {
  return (
    <div className="py-20">
      <h1
        class="next-error-h1"
        style="display:inline-block;margin:0;margin-right:20px;padding:0 23px 0 0;font-size:24px;font-weight:500;vertical-align:top;line-height:49px"
      >
        500
      </h1>
      <div style="display:inline-block;text-align:left;line-height:49px;height:49px;vertical-align:middle">
        <h2 style="font-size:14px;font-weight:normal;line-height:49px;margin:0;padding:0">
          Internal Server Error.
        </h2>
      </div>
      <p>Movie could not be found.</p>
    </div>
  );
}

export default Page;
