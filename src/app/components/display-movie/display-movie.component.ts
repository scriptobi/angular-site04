import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {
  title: string = "titre test";
  listFilm: Result[] = [];

  constructor(private movieService: MovieService, private actRoutes: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.actRoutes.snapshot.params['id'];
    this.movieService.getAll().subscribe(res =>{
      this.listFilm = res.results;
    })
  }

}
