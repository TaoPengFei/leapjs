var polygon = new Polygon(168, 72, 63, 252, 281, 110, 64, 87, 245, 245);


polygon.stroke();

polygon.x += 200;
polygon.setLineDash([5, 5]);
polygon.stroke();

polygon.x += 200;
polygon.setLineDash([5, 5, 10]);
polygon.stroke();