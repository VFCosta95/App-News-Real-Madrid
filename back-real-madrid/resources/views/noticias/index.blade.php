@extends('layout.app')

@section('content')


<div style="justify-content:center; display:flex;">
  <h1 class="" style="margin-right:50%;">Bem vindo ao Painel de Controle</h1>
</div>

<hr>
<br>
<div class="container mt-5">
    
    <div class="row">
      <div class="col-sm-10">
        <h1>Lista de Noticias</h1>
      </div>
      <div class="col-sm-2">
        <a href="{{ route('noticia-create')}}" class="btn btn-success">Add Nova Postagem</a>
      </div>
    </div>
    <br><hr><br>

<table class="table table-dark">
  <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Titulo</th>
        <th scope="col">Fonte</th>
        <th scope="col">Criado</th>
        <th scope="col">Editar / Deletar</th>
  
      
    </tr>
  </thead>
  <tbody>
    @foreach($noticia as $i)
    <tr>
      <th scope="row">{{ $i->id}}</th>
      <td>{{ $i->titulo }}</td> 
      <td> {{ $i->fonte }} </td>
      <td>{{ $i->created_at}}</td>

      <th class="d-flex">
        <a href="{{ route('noticia-edit', ['id'=> $i -> id]) }}" class="btn btn-primary me-5">
        <!--Tem que ser o mesmo nome da varivael foreach-->  
        <img width="15" height="15" src="https://img.icons8.com/ios/50/edit--v1.png" alt="edit--v1"/>
        </a>
        <form action="{{ route('noticia-destroy', ['id' => $i -> id]) }}" method="post">
          @csrf
          @method('delete')
          <button type="submit" class="btn btn-danger"> 
            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/filled-trash.png" alt="filled-trash"/>
          </button>
        </form>
        
      </th>
    </tr>
    @endforeach
  </tbody>
</table>
</div>


@endsection