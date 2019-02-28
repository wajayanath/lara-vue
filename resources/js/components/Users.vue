<template>
    <div class="container">
        <div class="row mt-5">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header no-border">
                <h3 class="card-title">Users Table</h3>
                <div class="card-tools">
                    <button class="btn btn-success" data-toggle="modal" data-target="#addNew">Add New <i class="fas fa-user-plus fa-fw"></i></button>
                </div>
              </div>
              <div class="card-body p-0">
                <table class="table table-striped table-valign-middle">
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Modify</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      Some Product
                    </td>
                    <td>$13 USD</td>
                    <td>
                      <small class="text-success mr-1">
                        <i class="fa fa-arrow-up"></i>
                        12%
                      </small>
                      12,000 Sold
                    </td>
                    <td>
                      <a href="#" class="text-muted">
                        <i class="fa fa-search"></i>
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <i class="fa fa-edit blue"></i>
                      </a>/
                      <a href="#">
                        <i class="fa fa-trash red"></i>
                      </a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col-md-6 -->
        </div>

        <!-- Modal -->
        <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addNewLabel">Add New</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Create</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
