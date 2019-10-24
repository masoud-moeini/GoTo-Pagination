####A React component for pagination

This component gives you a pagination like below:

![pagination square shape](https://i.ibb.co/fCZ0xST/paginate-1.jpg)

![pagination circle shape](https://i.ibb.co/56TFzBK/paginate-2.jpg)

you can input page number and enter to go to desired page. it is simple and user-friendly.

##Installation

Install goto-pagination via npm:

    $ npm install goto-pagination

import it in your component :

    import { GoToPagination } from "goto-pagination";

you can also import "paginate" function. a helper function that can be uses to paginate your table's data, if you are handling pagination in client side.

    import { GoToPagination, paginate } from "goto-pagination";

## Use

simply put the component wherever you want

        <GoToPagination
          currentPage={currentPage}
          itemsCount={this.data.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          firstIcon={"icon-chevrons-left"}
          lastIcon={"icon-chevrons-right"}
          goToIcon={"icon-chevron-right"}
          firstText={"First"}
          lastText={"Last"}
          goToText={"Go"}
          shape={"circle"}
        ></GoToPagination>

and use ***paginate*** function like this (if you need it)

    const output = paginate(this.data, currentPage, pageSize);


####list of props :
**currentPage:** current page of pagination when component loads at first.[required][number]<br />
**itemsCount:** total number of items in data array. [required][number]<br />
**pageSize:** total number of items that need to be shown in one page.[required][number]<br />
**onPageChange:** handler for when user change the page. it gets the target page as the parameter. you have to change the ***currentPage*** in this function.[required][function]<br />
**firstIcon, lastIcon, goToIcon:** class icons for last, first and go buttons. you can use [FontAwsome](https://fontawesome.com/) or [icoMoon](https://icomoon.io)<br />
**firstText, lastText, goToText:** alternatively you can use text instead of icons for buttons. if you set icon the text will be ignored.<br />
**shape:** two shapes are supported, square and circle.



