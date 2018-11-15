'use strict';

function handleTableClick(event) {
  const marker = event.target;

   if (marker.tagName === "TH") {
    const sort = marker.dataset.dir;
    const table = document.querySelector('table');
    table.dataset.sortBy = marker.dataset.propName;

     if (sort < 0) {
      marker.dataset.dir = 1;
    }else if (sort > 0 || !sort) {
      marker.dataset.dir = -1;
    }
     sortTable(table.dataset.sortBy, sort);
  }
};
