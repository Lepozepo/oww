Template.productForm.helpers({
	product: function(){
	return Products.findOne({_id:Session.get('editing_product')});
}})


Template.menu.helpers({
	appName :function(){
	return Session.get('appName');
}})

Template.products.helpers({
	productList: function(){
	return Products.find();
}})

Template.productForm.events({
	'click .save':function(evt,tmpl){
		var name = tmpl.find('.name').value;
		var codigo = tmpl.find('.codigo').value;
		var descripcion = tmpl.find('.descripcion').value;
		var caracteristica = tmpl.find('.caracteristica').value;
		var precio = tmpl.find('.precio').value;
		var costo = tmpl.find('.costo').value;
		var proveedor = tmpl.find('.proveedor').value;
		var maquilero = tmpl.find('.maquilero').value;
		var departamento = tmpl.find('.departamento').value;
		var fit = tmpl.find('.fit').value;
		var talla = tmpl.find('.talla').value;
		var color  = tmpl.find('.color').value;
		var temporada = tmpl.find ('.temporada').value;
		var tejido = tmpl.find('.tejido').value;
		var rop = tmpl.find('.rop').value;
		var composicion = tmpl.find('.composicion').value;
	
		if(Session.get('editing_product')){
			updateProduct(name, codigo, descripcion, caracteristica, precio, costo, proveedor, maquilero, departamento, fit, talla, color, temporada, tejido, rop, composicion);
		} else{
			addProduct(name, codigo, descripcion, caracteristica, precio, costo, proveedor, maquilero, departamento, fit, talla, color, temporada, tejido, rop, composicion);	
		}
		Session.set('showProductDialog',false);
		Session.set('editing_product',null);
	},
	'click .cancel':function(evt,tmpl){
		Session.set('showProductDialog',false);
		Session.set('editing_product',null);
	},
	'click .remove':function(evt,tmpl){
		removeProduct();	
		Session.set('showProductDialog',false);
		Session.set('editing_product',null);
	}
});




Template.products.events({
	'click .addProduct':function(evt,tmpl){
		Session.set('showProductDialog',true);
	}
})
Template.productForm.rendered = function(){
	var product = Products.findOne({_id:Session.get('editing_product')});
	if(product.codigo)
	$('.codigo').val(product.codigo);
}
Template.productRow.events({
	'dblclick .productRow':function(evt,tmpl){
		Session.set('editing_product',tmpl.data._id);
		Session.set('showProductDialog',true);
	}
})

Template.productForm.helpers({
	product: function(){
	return Products.findOne({_id:Session.get('editing_product')});
}})

Template.productForm.helpers({
	editing_product: function(){
	return Session.get('editing_product');
}})

Template.products.helpers({
	showProductDialog : function(){
	return Session.get('showProductDialog');
}})


Template.products.helpers({
	editing_product: function(){
	return Session.get('editing_product');
}})

var addProduct = function(name, codigo, descripcion, caracteristica, precio, costo, proveedorid, maquileroid, departamento, fit, talla, color, temporada, tejido, rop, composicion){

	Products.insert({name:name , codigo:codigo, descripcion:descripcion, caracteristica:caracteristica, precio:precio, costo:costo, proveedor:proveedor, maquilero:maquilero, departamento:departamento, fit:fit, talla:talla, color:color , temporada:temporada, tejido:tejido, rop:rop, composicion:composicion});
}

var updateProduct = function(name, codigo, descripcion, caracteristica, precio, costo, proveedorid, maquileroid, departamento, fit, talla, color, temporada, tejido, rop, composicion){

	Products.update(Session.get('editing_product'), {$set: {name:name , codigo:codigo, descripcion:descripcion, caracteristica:caracteristica, precio:precio, costo:costo, proveedor:proveedor, maquilero:maquilero, departamento:departamento, fit:fit, talla:talla, color:color , temporada:temporada, tejido:tejido, rop:rop, composicion:composicion}});
}



var removeProduct = function(){
	Products.remove({_id:Session.get('editing_product')});
}

