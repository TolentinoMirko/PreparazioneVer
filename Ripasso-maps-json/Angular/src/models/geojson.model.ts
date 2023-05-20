export class Geometry {
    public type: string =''; // da mettere il public se no non si possono toccare i dati
    coordinates: any; //non sappiamo se sarà un number[] (Point), number[][] (LineString) o number [][][] (Polygon)
}

export class GeoJson {
        public type: string = '';
        public geometry!: Geometry;
        public properties?: any
}

export class GeoFeatureCollection
{
    public type: string ='';
    public features!: GeoJson[];
}