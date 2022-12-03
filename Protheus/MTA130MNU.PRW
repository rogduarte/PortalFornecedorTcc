USER FUNCTION MT131MNU()

    aadd(aRotina,{'Gera Cotações - Customizado','u_teste1()' , 0 , 6,0,NIL})
    
RETURN aRotina

user function teste1()
    Local lEnvioOK:= .F.
    Local cAssunto :="Teste"
    Local cCorpo :="Teste"
    Local cPara := "rogerio.reis@totvs.com.br"
    Local aAnexos := {}
    lEnvioOK := GPEMail(cAssunto, cCorpo, cPara, aAnexos)
    ALERT(CValToChar(lEnvioOk))
RETURN
