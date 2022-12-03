#include "protheus.ch"
#include "fwmvcdef.ch"
#include "restful.ch"

//-------------------------------------------------------------------
/*{Protheus.doc} Cotacoes1
API para consulta de Cotações Tabela (SC8)

@author Rogério Duarte
@since 30/11/2022
@version 1.0
*/
//-------------------------------------------------------------------
WSRESTFUL Cotacoes1 DESCRIPTION "Serviço REST para manipulação de Cotações"

	WSDATA CodCliLoja As String

	WSMETHOD GET DESCRIPTION "Retorna as cotações informadas na URL" WSSYNTAX "/COTACOES1"
	WSMETHOD POST DESCRIPTION "Retorna as cotações informadas na URL" WSSYNTAX "/COTACOES1" PATH "/COTACOES1" PRODUCES APPLICATION_JSON

END WSRESTFUL

//-------------------------------------------------------------------
/*{Protheus.doc} GET
Retorna um json com os dados da cotação consultada

@author Rogério Duarte
@since 30/11/2022
@version 1.0
*/
//-------------------------------------------------------------------
WSMETHOD GET WSRECEIVE CodCliLoja WSSERVICE Cotacoes1

	Local aDados as array
	Local aItens as array
	Local aArea as array
	Local cCodCliLoja as char
	Local cJson as char
	Local jObjCot
	Local nX := 1
	Local cNumCota:=""

	cCodCliLoja := Self:CodCliLoja
	aArea := GetArea()


	::SetContentType("application/json")

	DbSelectArea("SC8")
	SC8->(DBOrderNickname("TCC"))

	if SC8->( DbSeek( xFilial("SC8") + cCodCliLoja ) )

		aDados := {}
		aItens := {}
		cNumCota:=SC8->C8_NUM

		While !SC8->(EOF()) .AND. ALLTRIM(SC8->C8_FORNECE)+ALLTRIM(SC8->C8_LOJA) == cCodCliLoja

			if nX == 1 .OR. (nX <> 1 .AND. alltrim(cNumCota) <> alltrim(SC8->C8_NUM))

				aAdd( aDados,  JsonObject():New() )
				aDados[len(aDados)]["status"]    :="precificada"
				aDados[len(aDados)]["filial"]    := xFIlial("SC8")
				aDados[len(aDados)]["fornecedor"]:= SC8->C8_FORNECE
				SA2->(DbSetOrder(1))
				if SA2->(MsSeek(xfilial("SA2")+SC8->C8_FORNECE))
					aDados[len(aDados)]["nomeFor"]   :=ALLTRIM(SA2->A2_NOME)
				ENDIF
				aDados[len(aDados)]["loja"]      :=SC8->C8_LOJA
				aDados[len(aDados)]["emissao"]   :=DTOC(C8_EMISSAO)
				aDados[len(aDados)]["validade"]  :=DTOC(C8_VALIDA)
				aDados[len(aDados)]["cotacao"]   := SC8->C8_NUM
				cNumCota:=SC8->C8_NUM
			ENDIF

			IF cNumCota == SC8->C8_NUM

				aAdd( aItens,  JsonObject():New() )
				aItens[len(aItens)]["item"]:=SC8->C8_ITEM
				aItens[len(aItens)]["produto"]:=SC8->C8_PRODUTO
				SB1->(DBSetOrder(1))
				IF SB1->(MsSeek(xfilial("SB1")+SC8->C8_PRODUTO))
					aItens[len(aItens)]["descricao"]:=ALLTRIM(SB1->B1_DESC)
				ENDIF
				aItens[len(aItens)]["unidade"]:=SC8->C8_UM
				aItens[len(aItens)]["quantity"]:=SC8->C8_QUANT
				aItens[len(aItens)]["price"]:=0
				aItens[len(aItens)]["total"]:=0
				cNumCota:=SC8->C8_NUM

			endif
			nX++
			SC8->(DBSKIP())

			if nX <> 1 .AND. alltrim(cNumCota) <> alltrim(SC8->C8_NUM)
				aDados[len(aDados)]['Itens'] := aItens
				aItens:={}
				nX:=1
			endif
			
		End

		jObjCot :=  JsonObject():New()
		jObjCot["COTACOES1"] := aDados

		cJson := jObjCot:toJson()
		::setResponse(cJson)
	else
		setRestFault(404)
	endIf


	RestArea(aArea)

return .T.

