@extends('layout.app')

@section('title',)

@section('content')
    <!-- Tudo aqui dentro será renderizado lá no nosso template -->

    <div class="container mt-5">
        <h1>New Post</h1>
        <hr>

        <form action="{{ route('noticia-store') }}" method="post" enctype="multipart/fomr">
            @csrf
            <div class="form-group">
                <div class="form-group">
                    <label for="nome">Titulo:</label>
                    <input type="text" class="form-control" name="titulo" placeholder="Digite um titulo">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Sub Titulo:</label>
                    <input type="text" class="form-control" name="subTitulo" placeholder="Digite o Sub Titulo">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Paragrafo 1:</label>
                    <input type="text" class="form-control" name="p_Um" placeholder="Digite o Paragrafo 1">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Paragrafo 2:</label>
                    <input type="text" class="form-control" name="p_Dois" placeholder="Digite o Paragrafo 2">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Paragrafo 3:</label>
                    <input type="text" class="form-control" name="p_Tres" placeholder="Digite o Paragrafo 3">
                </div>
                <br>
                
                <div class="form-group">
                    <label for="nome">Paragrafo 4:</label>
                    <input type="text" class="form-control" name="p_Quatro" placeholder="Digite o Paragrafo 4">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Paragrafo 5:</label>
                    <input type="text" class="form-control" name="p_Cinco" placeholder="Digite o Paragrafo 5">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Paragrafo 6:</label>
                    <input type="text" class="form-control" name="p_Seis" placeholder="Digite o Paragrafo 6">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Paragrafo 7:</label>
                    <input type="text" class="form-control" name="p_Sete" placeholder="Digite o Paragrafo 7">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Nome da fonte da noticia:</label>
                    <input type="text" class="form-control" name="fonte" placeholder="Digite o nome da fonte da noticia">
                </div>
                <br>
                
                <div class="form-group">
                    <label for="nome">Data e Hora:</label>
                    <input type="text" class="form-control" name="dataHora" placeholder="">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Endereço Foto:</label>
                    <input type="text" class="form-control" name="foto" placeholder="Endereço da Foto">
                </div>
                <br>

                <div class="form-group">
                    <input type="submit" name="submit" class="btn btn-primary">
                </div>
            </div>
        </form>

    </div>

@endsection