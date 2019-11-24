<script>
$(document).ready(function(){
$("select").material_select();
var old_html = $("div").html();
$("div").html("");
$("div").html(old_html);	// at this point, the old material_select has a buggy effect, where the select dropdown is rendered, but clicking it does not show the UL element.
$("select").material_select("destroy");	// Naturally, the solution that would cross one's mind at this point would be to destroy and re-initialize the select. However, "destroy" does not destroy the select element that we described above, material_select will work, and therefore we end up with duplicates.
$("select").material_select();
});
</script>
