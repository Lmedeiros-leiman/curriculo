<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class initialController extends Controller
{
    public function index() {



        $TokenCSRF = csrf_token();

        return Inertia::render('Welcome', [
            'CSFRtoken' => $TokenCSRF,
        ]);
    }

    public function enviarFormulario(){

        return response()->json(['success' => true], Response::HTTP_OK);

        #caso nao passe no teste de spam:
        return response()->json(['success' => true], Response::HTTP_FORBIDDEN);
    }

}
